// Primitive types
const studentName: string = "Ada Lovelace";
const age: number = 28;
const isEnrolled: boolean = true;
const courseCode: string | undefined = "TS-101";

// A type alias describes the shape of a value.
type SkillLevel = "beginner" | "intermediate" | "advanced";
type Score = number;

// An interface describes the shape of an object.
interface Student {
  id: number;
  name: string;
  age: number;
  enrolled: boolean;
  skills: string[];
  level: SkillLevel;
  score?: Score;
}

interface Course {
  code: string;
  title: string;
  students: Student[];
}

// Strongly typed arrays.
const topics: string[] = ["types", "interfaces", "functions"];
const testScores: number[] = [92, 88, 95];
const completed: boolean[] = [true, true, false];

// Strongly typed objects.
const student: Student = {
  id: 1,
  name: studentName,
  age,
  enrolled: isEnrolled,
  skills: ["HTML", "CSS", "TypeScript"],
  level: "beginner",
  score: testScores[0]
};

const course: Course = {
  code: courseCode ?? "TS-000",
  title: "TypeScript Fundamentals",
  students: [student]
};

// Strongly typed functions.
function calculateAverage(scores: number[]): number {
  const total = scores.reduce((sum: number, score: number) => sum + score, 0);
  return total / scores.length;
}

function createGreeting(person: Student): string {
  return `Welcome, ${person.name}! Your current level is ${person.level}.`;
}

function formatCourse(courseToFormat: Course): string {
  return `${courseToFormat.code}: ${courseToFormat.title} (${courseToFormat.students.length} student)`;
}

const averageScore: number = calculateAverage(testScores);
const greeting: string = createGreeting(student);
const courseSummary: string = formatCourse(course);

// Render the compiled JavaScript output in the browser.
const output = document.querySelector<HTMLDivElement>("#output");

if (output) {
  output.innerHTML = `
    <p class="eyebrow">Compiled JavaScript is running</p>
    <h1>${greeting}</h1>
    <p>${courseSummary}</p>
    <dl>
      <div><dt>Topics</dt><dd>${topics.join(", ")}</dd></div>
      <div><dt>Average score</dt><dd>${averageScore.toFixed(1)}%</dd></div>
      <div><dt>Enrollment</dt><dd>${completed.every(Boolean) ? "Complete" : "In progress"}</dd></div>
    </dl>
  `;
}
