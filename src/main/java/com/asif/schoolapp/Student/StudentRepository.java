package com.asif.schoolapp.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
/*
    @Query("select p from Student p where p.username = ?")
    Student getUserByUserName(String userName);

    @Query("select p from Student p where p.id = ?")
    Student getUserById(Integer userId);*/
}