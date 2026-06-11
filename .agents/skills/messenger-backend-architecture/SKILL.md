---
name: messenger-backend-architecture
description: Use when designing or modifying the private admin-client/broker messenger, backend, database, authentication, and inquiry workflow.
---

# Messenger Backend Architecture

## Product Goal

Build a private communication panel for admin and invited clients/brokers connected to a premium yacht presentation website.

## Roles

- Admin
- Client
- Broker
- Optional read-only observer

## Core Objects

- User
- Role
- Invite
- Inquiry
- Conversation
- Message
- Attachment
- Session
- RetentionPolicy
- AuditEvent

## Required Features

- invite-only access
- secure authentication
- private conversation threads
- admin dashboard
- client/broker panel
- message status
- attachment controls
- encrypted transport
- sensitive data encryption at rest where practical
- retention settings
- account disable/revoke
- MongoDB Atlas or equivalent managed database

## Do Not Build

- public chat widget
- anonymous open chat
- public message links
- unencrypted sensitive storage
- hardcoded admin credentials
- secrets in repository

## Output

1. Data model
2. API routes
3. Auth flow
4. Admin flow
5. Client/broker flow
6. Security controls
7. Retention controls
8. First implementation step
