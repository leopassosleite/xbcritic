package com.xbsoftwares.xbcritic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xbsoftwares.xbcritic.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByName(String name);
}
