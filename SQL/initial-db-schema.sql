-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: merkatodo
-- Source Schemata: merkatodo
-- Created: Sat Dec 16 16:20:03 2023
-- Workbench Version: 8.0.15
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema merkatodo
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `merkatodo` ;
CREATE SCHEMA IF NOT EXISTS `merkatodo` ;

-- ----------------------------------------------------------------------------
-- Table merkatodo.product_categories
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `merkatodo`.`product_categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `creation_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- ----------------------------------------------------------------------------
-- Table merkatodo.products
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `merkatodo`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NOT NULL,
  `brand_name` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `measurement` VARCHAR(50) NULL DEFAULT NULL,
  `measurement_quantity` INT NULL DEFAULT NULL,
  `stock` INT NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- ----------------------------------------------------------------------------
-- Table merkatodo.users
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `merkatodo`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `user_lastname` VARCHAR(255) NOT NULL,
  `type_of_user` VARCHAR(50) NULL DEFAULT NULL,
  `user_role` VARCHAR(50) NULL DEFAULT NULL,
  `telephone` VARCHAR(15) NULL DEFAULT NULL,
  `email` VARCHAR(255) NOT NULL,
  `address` TEXT NULL DEFAULT NULL,
  `creation_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;
SET FOREIGN_KEY_CHECKS = 1;
