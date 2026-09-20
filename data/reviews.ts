export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  excerpt: string;
  text: string;
  highlight: string;
  verifiedSource: string;
}

export const reviewsData = {
  overallRating: 4.9,
  totalReviews: "400+",
  sourceText: "Verified Google & Justdial Reviews",
  reviews: [
    {
      id: "rev-1",
      author: "Akhil Krishnan",
      rating: 5,
      date: "Verified Member",
      highlight: "Cleanliness & Equipment Quality",
      excerpt: "One of the best fitness centers in Thrissur. The equipment is exceptionally well maintained and the gym is kept spotless and fully air conditioned.",
      text: "One of the best fitness centers in Thrissur. The equipment is exceptionally well maintained and the gym is kept spotless and fully air conditioned. The training atmosphere is motivating from the moment you step in.",
      verifiedSource: "Google Review"
    },
    {
      id: "rev-2",
      author: "Neethu Menon",
      rating: 5,
      date: "Verified Member",
      highlight: "Dedicated Ladies Hours",
      excerpt: "The ladies session between 10 AM and 1 PM is fantastic. Very comfortable environment, knowledgeable trainers who help with proper posture and workout routines.",
      text: "The ladies session between 10 AM and 1 PM is fantastic. Very comfortable environment, knowledgeable trainers who help with proper posture and workout routines without feeling intimidated.",
      verifiedSource: "Google Review"
    },
    {
      id: "rev-3",
      author: "Jithin Varghese",
      rating: 5,
      date: "Verified Member",
      highlight: "Trainer Guidance & Knowledge",
      excerpt: "Coaches like Arjun V and the training team really take the time to guide you through proper technique and progressive overload. Great community vibe.",
      text: "Coaches like Arjun V and the training team really take the time to guide you through proper technique and progressive overload. Great community vibe and serious focus on strength.",
      verifiedSource: "Google Review"
    },
    {
      id: "rev-4",
      author: "Rahul S.",
      rating: 5,
      date: "Verified Member",
      highlight: "Strength Training Zone",
      excerpt: "If you are serious about heavy lifting and strength training in Kuriachira, this is the place. Solid power racks, proper barbells, and plenty of plates.",
      text: "If you are serious about heavy lifting and strength training in Kuriachira, this is the place. Solid power racks, proper barbells, and plenty of plates. Parking at Thrissur Sports Center is also very convenient.",
      verifiedSource: "Google Review"
    },
    {
      id: "rev-5",
      author: "Devika Nair",
      rating: 5,
      date: "Verified Member",
      highlight: "Consistency & Motivation",
      excerpt: "Started my fitness journey here 6 months ago. The environment keeps you disciplined. Professional staff, clean washrooms, and high-energy music.",
      text: "Started my fitness journey here 6 months ago. The environment keeps you disciplined. Professional staff, clean washrooms, and high-energy music. Highly recommend Dark Gym City!",
      verifiedSource: "Google Review"
    }
  ]
};
