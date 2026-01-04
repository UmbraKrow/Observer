# Observer — MVP Definition

## Goal

Build a minimal platform that allows:
- Tracking service deployments internally
- Automatically reflecting service health on a public status page

The MVP does not perform real deployments. A deployment is treated as an event.

---

## Components

### Observer Admin (Private)

A private web interface used to manage and observe services.

#### Features
- Authentication (single user)
- Projects
- Services within projects
- Manual deployment records (success / failed)
- Automatic service status calculation
- Sending service status events to Observer Status

---

### Observer Status (Public)

A public-facing web page displaying service health.

#### Features
- Public access (no authentication)
- List of services with current status
- Automatic incident creation on service failure
- Incident resolution on service recovery

---

## Service Status Logic

- Last deployment successful → service is healthy
- Last deployment failed → service is unhealthy

---

## Out of Scope

The following are intentionally excluded from the MVP:
- Real CI/CD integrations
- Deployment execution
- Monitoring and metrics
- Notifications
- Infrastructure automation
