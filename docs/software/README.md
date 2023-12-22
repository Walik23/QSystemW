# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
    
```sql

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema survey_system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `survey_system` ;

-- -----------------------------------------------------
-- Schema survey_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `survey_system` DEFAULT CHARACTER SET utf8 ;
USE `survey_system` ;

-- -----------------------------------------------------
-- Table `survey_system`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey_system`.`user` ;

CREATE TABLE IF NOT EXISTS `survey_system`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey_system`.`expert`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey_system`.`expert` ;

CREATE TABLE IF NOT EXISTS `survey_system`.`expert` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `job` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_expert_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_expert_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `survey_system`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey_system`.`quiz`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey_system`.`quiz` ;

CREATE TABLE IF NOT EXISTS `survey_system`.`quiz` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `topic` VARCHAR(45) NOT NULL,
  `text` VARCHAR(45) NOT NULL,
  `expert_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_quiz_expert1_idx` (`expert_id` ASC) VISIBLE,
  CONSTRAINT `fk_quiz_expert1`
    FOREIGN KEY (`expert_id`)
    REFERENCES `survey_system`.`expert` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey_system`.`question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey_system`.`question` ;

CREATE TABLE IF NOT EXISTS `survey_system`.`question` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  `quiz_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_question_quiz1_idx` (`quiz_id` ASC) VISIBLE,
  CONSTRAINT `fk_question_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `survey_system`.`quiz` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey_system`.`option`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey_system`.`option` ;

CREATE TABLE IF NOT EXISTS `survey_system`.`option` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  `question_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_option_question1_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_option_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `survey_system`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey_system`.`completed_survey`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey_system`.`completed_survey` ;

CREATE TABLE IF NOT EXISTS `survey_system`.`completed_survey` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `topic` VARCHAR(45) NOT NULL,
  `text` VARCHAR(45) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_completed survey_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_completed survey_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `survey_system`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey_system`.`selected_option`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey_system`.`selected_option` ;

CREATE TABLE IF NOT EXISTS `survey_system`.`selected_option` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `question_id` INT UNSIGNED NOT NULL,
  `completed survey_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_selected option_question1_idx` (`question_id` ASC) VISIBLE,
  INDEX `fk_selected option_completed survey1_idx` (`completed survey_id` ASC) VISIBLE,
  CONSTRAINT `fk_selected option_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `survey_system`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_selected option_completed survey1`
    FOREIGN KEY (`completed survey_id`)
    REFERENCES `survey_system`.`completed_survey` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey_system`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey_system`.`result` ;

CREATE TABLE IF NOT EXISTS `survey_system`.`result` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  `most_popular_option_id` INT NOT NULL,
  `quiz_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_quiz1_idx` (`quiz_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `survey_system`.`quiz` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



```

## RESTfull сервіс для управління даними

## Сутності

### completed_survey
```java
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "completed_survey")
public class completed_survey {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "topic", nullable = false)
    private String topic;

    @Column(name = "text", nullable = false)
    private String text;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private user user;
}
```

### expert
```java
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "expert")
public class expert {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "job", nullable = false)
    private String job;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @OneToOne
    @JoinColumn(name = "user_id")
    private user user;
}
```

### option
```java
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "option")
public class option {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "text", nullable = false)
    private String text;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private question question;
}
```

### question
```java
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "question")
public class question {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "text", nullable = false)
    private String text;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private quiz quiz;
}
```

### quiz
```java
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "quiz")
public class quiz {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "topic", nullable = false)
    private String topic;

    @Column(name = "text", nullable = false)
    private String text;


    @ManyToOne
    @JoinColumn(name = "expert_id")
    private expert expert;
}
```

### result
```java
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "result")
public class result {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "most_popular_option_id", nullable = false)
    private Integer most_popular_option_id;

    @Column(name = "text", nullable = false)
    private String text;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private quiz quiz;
}
```

### selected_option
```java
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "selected_option")
public class selected_option {
    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private question question;

    @ManyToOne
    @JoinColumn(name = "completed survey_id")
    private completed_survey completed_survey;
}
```

### user
```java
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user")
public class user {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;
}
```

## Репозиторії

### completedSurveyRepository
```java
import com.example.demo.model.completed_survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompletedSurveyRepository extends JpaRepository<completed_survey, Integer> {
}
```

### ExpertRepository
```java
import com.example.demo.model.expert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpertRepository extends JpaRepository<expert, Integer> {
}
```

### OptionRepository
```java
import com.example.demo.model.option;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OptionRepository extends JpaRepository<option, Integer> {
}
```

### QuestionRepository
```java
import com.example.demo.model.question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<question, Integer> {
}
```

### QuizRepository
```java
import com.example.demo.model.quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<quiz, Integer> {
}
```

### ResultRepository
```java
import com.example.demo.model.result;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepository extends JpaRepository<result, Integer> {
}
```

### selectedOptionRepository
```java
import com.example.demo.model.selected_option;
import org.springframework.data.jpa.repository.JpaRepository;

public interface selectedOptionRepository extends JpaRepository<selected_option, Integer> {
}
```

### UserRepository
```java
import com.example.demo.model.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<user, Integer> {
}
```
