package com.asif.schoolapp.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public Student save(Student student){
        return repository.save(student);
    }

    public List<Student> studentList() {
        return repository.findAll();
    }

    public Student findById(Integer Id){
        return repository.findOne(Id);
    }

    public void deleteById(Integer Id){
         repository.delete(Id);
    }

}
