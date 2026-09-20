import { business } from "@/data/business";

export interface LiveStatus {
  isOpen: boolean;
  isLadiesSession: boolean;
  statusTitle: string;
  statusDetail: string;
  todayScheduleText: string;
  currentDayIndex: number;
}

export function getLiveGymStatus(): LiveStatus {
  try {
    // Determine current time in Asia/Kolkata timezone
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: business.timezone || "Asia/Kolkata",
      hour12: false,
      hour: "numeric",
      minute: "numeric"
    });

    const parts = formatter.formatToParts(now);
    let hour = 0;
    let minute = 0;

    for (const p of parts) {
      if (p.type === "hour") hour = parseInt(p.value, 10);
      if (p.type === "minute") minute = parseInt(p.value, 10);
    }

    // Get day index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: business.timezone || "Asia/Kolkata",
      weekday: "short"
    });
    const weekdayStr = dayFormatter.format(now).toLowerCase();
    
    const dayMap: Record<string, number> = {
      sun: 0,
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6
    };
    const dayIndex = dayMap[weekdayStr] ?? now.getDay();
    const currentMinutes = hour * 60 + minute;

    const schedule = business.schedule[dayIndex];

    if (!schedule || !schedule.isOpen) {
      return {
        isOpen: false,
        isLadiesSession: false,
        statusTitle: "CLOSED NOW",
        statusDetail: "Opens Monday at 5:00 AM",
        todayScheduleText: "Closed Today",
        currentDayIndex: dayIndex
      };
    }

    const [openH, openM] = (schedule.open || "05:00").split(":").map(Number);
    const [closeH, closeM] = (schedule.close || "22:00").split(":").map(Number);

    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    // Dedicated ladies hours: 10:00 to 13:00 (10:00 AM – 1:00 PM)
    const ladiesStart = 10 * 60;
    const ladiesEnd = 13 * 60;
    const isLadiesSession = isOpen && currentMinutes >= ladiesStart && currentMinutes < ladiesEnd;

    let statusTitle = "CLOSED NOW";
    let statusDetail = "";

    if (isOpen) {
      if (isLadiesSession) {
        statusTitle = "LADIES SESSION NOW";
        statusDetail = "Exclusive Women's Hours until 1:00 PM";
      } else {
        statusTitle = "OPEN NOW";
        statusDetail = "Closes today at 10:00 PM";
      }
    } else {
      if (currentMinutes < openMinutes) {
        statusTitle = "CLOSED NOW";
        statusDetail = "Opens today at 5:00 AM";
      } else {
        // After 10:00 PM
        const nextDayIndex = (dayIndex + 1) % 7;
        const nextSchedule = business.schedule[nextDayIndex];
        if (nextSchedule && nextSchedule.isOpen) {
          statusDetail = "Opens tomorrow at 5:00 AM";
        } else {
          statusDetail = "Opens Monday at 5:00 AM";
        }
      }
    }

    return {
      isOpen,
      isLadiesSession,
      statusTitle,
      statusDetail,
      todayScheduleText: schedule.text,
      currentDayIndex: dayIndex
    };
  } catch {
    // Fallback safe status
    return {
      isOpen: true,
      isLadiesSession: false,
      statusTitle: "OPEN TODAY",
      statusDetail: "Mon – Sat: 5:00 AM – 10:00 PM",
      todayScheduleText: "5:00 AM – 10:00 PM",
      currentDayIndex: 1
    };
  }
}
