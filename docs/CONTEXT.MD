@ -1,276 +0,0 @@
# LeetAI: AI-Powered Coding Learning Platform

## Overview
LeetAI is an AI-powered mobile app that helps users learn algorithms and solve LeetCode problems in a gamified format. The app guides users through a journey from beginner to advanced coding levels, preparing them for technical interviews and career success.

## App Flow & Features

### 1. Onboarding Flow
#### Welcome Screen
- Continue with Github/Google/Facebook
- Sign Up with Email

#### User Registration
- Email + Password authentication
- Terms and privacy policy acceptance

### 2. User Profiling
New users complete a profile questionnaire:
- LeetCode experience level (Newbie/Intermediate/Advanced)
- Years of coding experience (0-1, 1-3, 3-5, 5+)
- Preferred programming language
- Algorithm familiarity
- Learning goals

### 3. Learning Paths
#### Start From Scratch
- Beginner-friendly introduction to coding fundamentals
- Step-by-step algorithm basics

#### Smart Assessment
- Skill level evaluation through coding challenges
- Personalized learning path generation
- Curated LeetCode problem collections
- Job-oriented learning tracks

#### Progress Planning
- 30-day achievement roadmap
- Milestone tracking
- Personalized goals (e.g., 20-30 problems/month)

### 4. Learning Experience
#### Gamification Elements
- Experience points (XP) and level progression
- Daily coding challenges
- Achievement badges
- Leaderboard rankings
- Interactive problem-solving puzzles

#### Educational Features
- Algorithm visualizations
- Step-by-step walkthroughs
- AI-powered code review
- Multiple-choice knowledge checks

### 5. Subscription Model
#### Free Tier
- Basic learning materials
- Core problem sets
- Basic gamification features

#### Premium (Super) Features
- 7-day free trial
- AI Code Review & Feedback
- Company-specific problem sets
- Mock interviews
- Advanced algorithm visualizations

### 6. Dashboard
- Daily progress tracking
- Problem set selection
- Active challenge tracking
- Learning path visualization

### 7. Community Features
- Peer discussion forums
- Mentorship program
- Mock interview practice
- Company-specific interview prep

### 8. Technical Stack
- Frontend: React Native with TypeScript (Expo + Expo Router)
- UI Framework: React Native Paper
- Backend: Supabase
- AI Processing: DeepSeek

### 9. Future Roadmap
- Company-specific interview simulations
- Community coding competitions
- Enhanced AI features
- Extended learning paths

### 10. Database Schema
#### Users Table
- id: uuid (primary key)
- email: string (unique)
- created_at: timestamp
- auth_provider: string
- profile_completed: boolean

#### UserProfiles Table
- user_id: uuid (foreign key)
- experience_level: enum
- years_coding: integer
- preferred_language: string
- learning_goals: jsonb
- created_at: timestamp
- updated_at: timestamp

#### Problems Table
- id: uuid (primary key)
- title: string
- difficulty: enum
- category: string
- description: text
- test_cases: jsonb
- solution_template: jsonb

#### UserProgress Table
- user_id: uuid (foreign key)
- problem_id: uuid (foreign key)
- status: enum (not_started, in_progress, completed)
- attempts: integer
- completed_at: timestamp
- xp_earned: integer

#### Subscriptions Table
- user_id: uuid (foreign key)
- plan_type: enum
- start_date: timestamp
- end_date: timestamp
- status: enum (active, cancelled, expired)

#### Achievements Table
- id: uuid (primary key)
- title: string
- description: text
- xp_reward: integer
- requirements: jsonb

### 11. Project Structure
- Company-specific interview simulations
- Community coding competitions
- Enhanced AI features
- Extended learning paths


⌘K to generate a command
GIVE ME THE FULL DATABASE SCHEMA AND THE OPTIMAL FOLDER STRUCTURE OF THE APP AND ADD THIS IN THE CONTEXT-FILE @CONTEXT.MD 

I'll help you add detailed database schema and folder structure sections to the CONTEXT.MD file. Here are the relevant additions/edits:
Structure

src/
├── app/ # Expo Router app directory
│ ├── (auth)/ # Authentication routes
│ │ ├── login.tsx
│ │ ├── register.tsx
│ │ ├── forgot-password.tsx
│ │ └── layout.tsx
│ ├── (main)/ # Main app routes
│ │ ├── home/
│ │ ├── problems/
│ │ ├── profile/
│ │ ├── learning-paths/
│ │ └── settings/
│ └── layout.tsx # Root layout
├── components/
│ ├── ui/ # Reusable UI components
│ │ ├── buttons/
│ │ ├── forms/
│ │ ├── cards/
│ │ └── modals/
│ ├── features/ # Feature-specific components
│ │ ├── auth/
│ │ ├── problems/
│ │ ├── profile/
│ │ └── learning-paths/
│ └── layouts/ # Layout components
│ ├── AuthLayout.tsx
│ └── MainLayout.tsx
├── lib/
│ ├── supabase/ # Supabase integration
│ │ ├── client.ts
│ │ ├── types.ts
│ │ └── queries/
│ ├── ai/ # AI integration
│ │ ├── deepseek.ts
│ │ └── code-analysis.ts
│ └── utils/ # Helper functions
│ ├── validation.ts
│ ├── formatting.ts
│ └── analytics.ts
├── hooks/ # Custom React hooks
│ ├── useAuth.ts
│ ├── useProblems.ts
│ └── useProgress.ts
├── constants/
│ ├── routes.ts
│ ├── config.ts
│ └── types.ts
├── assets/
│ ├── images/
│ ├── fonts/
│ └── icons/
├── styles/
│ ├── theme.ts
│ └── global.ts
├── services/ # API and external services
│ ├── api/
│ ├── storage/
│ └── analytics/
├── context/ # React Context providers
│ ├── AuthContext.tsx
│ └── ThemeContext.tsx
├── types/ # TypeScript type definitions
│ ├── api.ts
│ ├── models.ts
│ └── common.ts
└── tests/ # Test files
├── unit/
├── integration/
└── e2e/

# Development Roadmap

## Phase 1: Project Setup & Authentication (2 weeks)
1. Initialize React Native project with Expo and TypeScript
2. Set up project structure and navigation (Expo Router)
3. Configure Supabase backend
4. Implement authentication flows:
   - Email/password signup/login
   - Social authentication (GitHub, Google)
   - Password reset functionality
5. Create basic user profile storage

## Phase 2: User Onboarding & Profiling (2 weeks)
1. Design and implement welcome screens
2. Build user registration flow
3. Create profile questionnaire:
   - Experience level selection
   - Programming language preference
   - Learning goals setup
4. Implement profile data storage in Supabase
5. Add profile completion tracking

## Phase 3: Core Learning Features (3 weeks)
1. Implement basic problem viewing:
   - Problem list
   - Problem details page
   - Code editor integration
2. Add problem categories and difficulty levels
3. Create basic code execution environment
4. Implement progress tracking
5. Add basic achievement system

## Phase 4: Learning Paths & Assessment (3 weeks)
1. Build smart assessment system:
   - Skill evaluation problems
   - Difficulty adaptation
2. Implement personalized learning paths:
   - Path generation based on profile
   - Progress tracking
   - Milestone system
3. Create curated problem collections
4. Add learning path visualization

## Phase 5: Gamification Features (2 weeks)
1. Implement XP system
2. Add levels and progression
3. Create achievement badges
4. Build leaderboard system
5. Add daily challenges

## Phase 6: Premium Features (3 weeks)
1. Implement subscription system
2. Add AI code review:
   - Integration with DeepSeek
   - Code analysis
   - Feedback generation
3. Create premium problem sets
4. Add advanced algorithm visualizations

## Phase 7: Community Features (2 weeks)
1. Build discussion forums
2. Implement peer review system
3. Add mentorship matching
4. Create mock interview system

## Phase 8: Polish & Launch (3 weeks)
1. UI/UX improvements
2. Performance optimization
3. Testing and bug fixes
4. Analytics integration
5. App store preparation

## Testing Strategy
- Unit tests for core functionality
- Integration tests for critical flows
- End-to-end testing for user journeys
- Performance testing
- Security testing

## Deployment Strategy
1. Alpha testing with small user group
2. Beta testing with larger audience
3. Staged rollout to production
4. Monitoring and feedback collection

## Success Metrics
- User registration and retention rates
- Problem completion rates
- Subscription conversion rate
- User engagement metrics
- App store ratings and reviews

This development plan spans approximately 20 weeks, with some phases potentially running in parallel. Each phase should include:
- Design review
- Implementation
- Testing
- Documentation
- Code review
