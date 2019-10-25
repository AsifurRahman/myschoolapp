package com.asif.schoolapp.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserService {

    @Autowired
    private AppUserRepository repository;

    public AppUser save(AppUser appUser){
        return repository.save(appUser);
    }

    public List<AppUser> userList() {
        return repository.findAll();
    }

    public AppUser findById(Integer Id){
        return repository.getOne(Id);
    }

    public void deleteById(Integer Id){
         repository.delete(Id);
    }


}
