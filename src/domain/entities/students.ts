import { Entity } from "../../core/domain/Entity";

type StudentsProps = {
    name: string;
    email: string;
}

export class Student extends Entity <StudentsProps> {
    private constructor(props: StudentsProps, id?: string) {
        super(props,id);
    }

    static create(props: StudentsProps, id?: string) {
        const students = new Student(props,id);

        return students;
    }
}