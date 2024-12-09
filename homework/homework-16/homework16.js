/**
 * Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості.
 * Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
 *
 * Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений,
 * але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present()
 * на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
 * Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
 * Масив – це властивість, present та absent – методи.
 *
 * Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
 * і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
 * якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
 *
 * Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів)
 * і показати використання цих методів.
 */
function createStudent(firstName, lastName, birthYear, grades = []) {
  const attendance = Array(25).fill(null);

  return {
    firstName,
    lastName,
    birthYear,
    grades,
    attendance,

    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    },

    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const total = this.grades.reduce((sum, grade) => sum + grade, 0);
      return total / this.grades.length;
    },

    present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      } else {
        console.log("Масив відвідуваності заповнений!");
      }
    },

    absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      } else {
        console.log("Масив відвідуваності заповнений!");
      }
    },

    getAverageAttendance() {
      const validRecords = this.attendance.filter(entry => entry !== null);
      const totalAttendance = validRecords.filter(entry => entry === true).length;
      return validRecords.length > 0 ? totalAttendance / validRecords.length : 0;
    },

    summary() {
      const avgGrade = this.getAverageGrade();
      const avgAttendance = this.getAverageAttendance();

      if (avgGrade > 90 && avgAttendance > 0.9) {
        return "Молодець!";
      } else if (avgGrade > 90 || avgAttendance > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  };
}

const student1 = createStudent("Микита", "Губій", 1995, [44, 88, 77, 100, 50]);
const student2 = createStudent("Кристина", "Мойсеєва", 1993, [75, 80, 82]);
const student3 = createStudent("Євгенія", "Чепіга", 1996, [3, 100, 43]);

student1.present();
student1.present();
student1.absent();

console.log(`${student1.firstName} ${student1.lastName}, Вік: ${student1.getAge()}, Середній бал: ${student1.getAverageGrade()}, Середня відвідуваність: ${student1.getAverageAttendance()}, Резюме: ${student1.summary()}`);

student2.present();
student2.present();
student2.absent();
student2.absent();

console.log(`${student2.firstName} ${student2.lastName}, Вік: ${student2.getAge()}, Середній бал: ${student2.getAverageGrade()}, Середня відвідуваність: ${student2.getAverageAttendance()}, Резюме: ${student2.summary()}`);

student3.absent();
student3.absent();
student3.present();

console.log(`${student3.firstName} ${student3.lastName}, Вік: ${student3.getAge()}, Середній бал: ${student3.getAverageGrade()}, Середня відвідуваність: ${student3.getAverageAttendance()}, Резюме: ${student3.summary()}`);
