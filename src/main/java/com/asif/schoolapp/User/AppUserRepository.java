package com.asif.schoolapp.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Integer> {

    @Query("select p from AppUser p where p.username = ?")
    AppUser getUserByUserName(String userName);

    @Query("select p from AppUser p where p.id = ?")
    AppUser getUserById(Integer userId);
}