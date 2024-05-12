// VideoCourses.js
import React from "react";
import BasicHaircutImg from "../images/basic-haircut.webp";
import AdvancedBeardTrimmingImg from "../images/advanced-beard-trimming.jpg";
import HairstylingMasterclassImg from "../images/hairstyling-masterclass.jpeg";

const Learn = () => {
  // Example data for video courses (replace with actual data)
  const courses = [
    {
      id: 1,
      title: "Basic Haircut Techniques",
      instructor: "John Doe",
      imageUrl: BasicHaircutImg,
    },
    {
      id: 2,
      title: "Advanced Beard Trimming",
      instructor: "Jane Smith",
      imageUrl: AdvancedBeardTrimmingImg,
    },
    {
      id: 3,
      title: "Men's Hairstyling Masterclass",
      instructor: "Alex Johnson",
      imageUrl: HairstylingMasterclassImg,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Video Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600">
                Instructor: {course.instructor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
