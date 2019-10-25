/*
package com.asif.schoolapp.Configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    // roles admin allow to access /admin/**
    // roles user allow to access /user/**
    // custom 403 access denied handler
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/app-assets/css/**").permitAll()
                .antMatchers("/app-assets/css-rtl/**").permitAll()
                .antMatchers("/assets/**").permitAll()
                .antMatchers("/app-assets/data/**").permitAll()
                .antMatchers("/app-assets/fonts/**").permitAll()
                .antMatchers("/app-assets/images/**").permitAll()
                .antMatchers("/app-assets/images-placeholder/**").permitAll()
                .antMatchers("/app-assets/js/**").permitAll()
                .antMatchers("/app-assets/vendors/**").permitAll()
                .antMatchers("/admin/preAuthorized/**").permitAll()
                .antMatchers("/register").permitAll()
                .antMatchers("/**").access("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .defaultSuccessUrl("/")
                .usernameParameter("username")
                .passwordParameter("password")
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login")
                .invalidateHttpSession(true)
                .and()
                .exceptionHandling()
                .accessDeniedPage("/403")
                .and()
                .csrf().disable();
    }

 */
/* // create two users, admin and user
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

        auth.inMemoryAuthentication()
                .withUser("user").password("password").roles("USER")
                .and()
                .withUser("admin").password("password").roles("ROLE_ADMIN");
    }*//*


}
*/
