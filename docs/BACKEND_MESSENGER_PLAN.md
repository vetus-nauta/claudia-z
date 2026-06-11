# Backend and Private Communication Plan

## Status

Future phase. Do not implement unless explicitly requested.

## Goal

Create a private communication panel for admin and invited clients/brokers. This is a future access layer, not a public contact path on the presentation site.

## Roles

- Admin
- Client
- Broker
- Optional read-only observer

## Core Entities

- User
- Role
- Invite
- Conversation
- Message
- Attachment
- Session
- RetentionPolicy
- AuditEvent

## Baseline Requirements

- invite-only access
- secure authentication
- private threads
- role-based access
- secure sessions
- encrypted transport
- sensitive-field encryption at rest where practical
- MongoDB Atlas or equivalent managed DB
- attachment controls
- retention policy
- account revoke/disable

## Do Not Build

- public chat widget
- anonymous open chat
- public message links
- hardcoded admin credentials
- secrets in repository
- unencrypted sensitive data without reason

## First Safe Backend Task

Prepare architecture and data model only.
Do not build until controlled presentation layer and security policy are approved.
