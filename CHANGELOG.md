# Cufinder TypeScript SDK Changelog

## 1.1.0 (Current)

#### Features
- Added comprehensive V2 API services including LBS (Local Business Search), CUF (Company URL Finder), EPP (Email Pattern Predictor), and more
- Implemented type-safe service architecture with proper error handling
- Added extensive JSDoc documentation for all services

#### Refactor & Structure Improvement
- Complete SDK structure overhaul with improved service organization
- Removed all deprecated V1 services and replaced with V2 equivalents
- Implemented base service class for consistent error handling and validation
- Updated build system with tsup for better bundling
- Added proper TypeScript declarations for all services

#### Bug Fixes
- Fixed inline validation issues in CUF, EPP, FWE, and REL services
- Improved error handling across all services
- Removed unused imports and methods

#### Maintenance
- Updated linter and prettier configuration
- Added prebuild script for clean builds
- Improved package.json scripts for development workflow
- Updated README documentation

## 1.0.2

Initial stable release with basic API functionality.

## 1.0.0

First release of the Cufinder TypeScript SDK.
