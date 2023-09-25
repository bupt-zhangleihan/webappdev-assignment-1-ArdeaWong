import java.util.ArrayList;
import java.util.List;

public class PassStudents {
    public static void main(String[] args) {
        List<Object> allStudents = new ArrayList<>();
        allStudents.add("A");
        allStudents.add("B-");
        allStudents.add(1);
        allStudents.add(4);
        allStudents.add(5);
        allStudents.add(2);

        List<Object> studentsWhoPass = new ArrayList<>();

        for (Object student : allStudents) {
            if (student instanceof Integer) {
                int grade = (int) student;
                if (grade >= 3) {
                    studentsWhoPass.add(student);
                }
            } else if (student instanceof String) {
                String grade = (String) student;
                if (grade.equals("A") || grade.equals("A-") || grade.equals("B") || grade.equals("B-")) {
                    studentsWhoPass.add(student);
                }
            }
        }

        System.out.println("Students who pass the exam:");
        for (Object student : studentsWhoPass) {
            System.out.println(student);
        }
    }
}