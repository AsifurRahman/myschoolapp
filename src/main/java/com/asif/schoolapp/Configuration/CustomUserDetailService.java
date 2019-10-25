/*
package com.asif.schoolapp.Configuration;


import com.asif.schoolapp.User.AppUser;
import com.asif.schoolapp.User.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private AppUserRepository appUserRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        List<String> roles = new ArrayList<String>();

        if (StringUtils.isEmpty(userName)) {
            throw new UsernameNotFoundException("User name is empty");
        }

       AppUser user = appUserRepository.getUserByUserName(userName);

        if (user != null && !user.isEnabled()) {
            throw new LockedException("User is disabled");
        }

        if (user != null && user.isEnabled()) {
            roles.add(user.getRole());
            System.out.println("roles:" + roles.toString());
            UserDetails userDetails = new org.springframework.security.core.userdetails.User(userName, user.getPassword(), getAuthorities(roles)) {
            };
            return userDetails;
        } else {
            System.out.println("User not valid!!");
            throw new UsernameNotFoundException("could not find the user '" + userName + "'");
        }
    }

    public Collection<? extends GrantedAuthority> getAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        for (String role : roles) {
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }
}*/
