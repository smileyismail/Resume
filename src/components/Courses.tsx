import { developerCourses } from "../data/courses";

const Courses = () => {
  return (
    <div>
      <div className="flex my-3 gap-1.5">
        <h2 className="text-2xl font-bold pt-1 text-black">Courses</h2>
      </div>

      <ul className="pl-7 text-[15px] flex flex-col gap-1.5 text-neutral-900">
        {developerCourses.map((course, index) => (
          <li key={index} className="marker:text-accent list-disc">
            <p>{course.title}</p>
            <p className="text-sm">{course.platform}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
