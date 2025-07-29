package com.dai.ChallengeApp;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/challenges/hello").permitAll() // Cho phép truy cập tự do
                .requestMatchers("/h2-console/**").permitAll()    // Cho phép H2 console
                .anyRequest().authenticated()                     // Các endpoint khác cần xác thực
            )
            .formLogin(form -> form
                .defaultSuccessUrl("/challenges/hello", true)
            )
            .csrf(csrf -> csrf
                .ignoringRequestMatchers("/h2-console/**")        // Tắt CSRF cho H2 console
                .disable()                                        // Hoặc tắt hoàn toàn cho API
            )
            .headers(headers -> headers
                .frameOptions(frameOptions -> frameOptions.sameOrigin()) // Cho phép H2 console hiển thị
            );

        return http.build();
    }
/*
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
                .username("admin")
                .password(passwordEncoder().encode("password123"))
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(user);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
*/
}
