package com.asif.schoolapp.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> list() {
        Map<String, Object> resultMap = new HashMap<>();
        List<Student> studentList = studentService.studentList();
        resultMap.put("studentList",studentList);
        System.out.println(studentList);
        return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<Map<String, Object>> save(@RequestBody @Valid Student student, BindingResult result) {
        System.out.println("student object:" +student);
        Map<String, Object> resultMap = new HashMap<>();
        if (!result.hasErrors()) {
            studentService.save(student);
            System.out.println(student.toString());
            resultMap.put("student", student);
            return new ResponseEntity<Map<String,Object>>(resultMap, HttpStatus.OK);
        }
        return new ResponseEntity<Map<String,Object>>(resultMap, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/view")
    public ResponseEntity<Student> view(@RequestParam(name = "id", required = true) Integer id) {
        return new ResponseEntity<Student>(studentService.findById(id), HttpStatus.OK);
    }

    @GetMapping("/remove")
    public ResponseEntity<Void> remove(@RequestParam(name = "id", required = true) Integer id) {
        studentService.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @GetMapping("/new")
    public String responseNew(){
        return "asif";
    }

}
