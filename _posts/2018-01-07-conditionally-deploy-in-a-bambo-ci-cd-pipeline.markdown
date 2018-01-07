---
layout: post
title:  "Conditionally Deploy in a Bambo CI/CD Pipeline"
date:   2018-01-07 10:39:00 -0800
categories: tech
summary: "Bamboo does not easily allow users to conditionally run jobs. Here is a solution."
letter: "C"
readTime: "4"
comments: true
---
My coworkers and I always try to follow the “keep it simple, stupid” mantra, but we may not have followed that mantra on our configuration of our Continuous Integration/Continuous Deployment/Continuous Delivery pipeline. Using the tools that we have, we created a solution to our Bamboo problem. The following is an explanation of our pipeline. Any feedback is welcome!

At my current place of employment, we use the Atlassian suite to aide in development. Atlassian provides Bamboo to fulfill CI/CD needs. In my opinion, Bamboo is a solid product but not as feature rich as its competitors. Our current issue with Bamboo is **Bamboo cannot conditionally trigger new jobs from successful jobs**. The rest of the post is built upon this assumption. Please let me know if I am incorrect, because that would help me a great deal!

Besides Bamboo, we use Docker Containers, an artifact store, and our deployed service runs on Rancher with Cattle. These technologies influence our pipeline since they limit our choices with what we can do with artifacts and how we can deploy our product.

Below is a simplified version of our ideal pipeline:

![Ideal Pipeline]({{ "/assets/2018-01-07/bamboo.jpg" | absolute_url }}){: .center-image }

Multiple things to note about this diagram
- Merge into Service X’s Repo: This means that a new branch of the repo has gone through code review and branch tests and has been merged into the develop branch. We use the develop branch to kick off our pipeline.
- Service X Tests: These can be unit or fast functional tests that only need the current service to run.
- CI Tests: These are end-to-end tests that spin up all the services to run the tests against. This is the first time services are tested with each other.
- Build and Push Service X: This job and the jobs leading up to this one have been cloning service(s) repo(s) and running the containers from there. We do that once last time in this job. This job builds the production image and pushes it to our artifact store.
- Deploy Service X: We execute the Rancher commands and have Rancher pull the updated images from our artifact store.

For this example, we have two services: Service A and Service B. Let’s say we have a new feature for Service A that has gone through code review and has passed its own tests. We merge the new feature into the develop branch of Service A and the Service A tests on the develop branch start. If those succeed, the Service A Tests job will trigger the CI Tests jobs. The CI Tests job will take the develop branch from Service A and B and run the integration tests. If those succeed, only the Build and Push Service A job will start, not the job for Service B. The Build and Push Service B job does not get triggered because Service B has not been updated. If the Build and Push Service A job passes, it will then deploy.

Again, this is our ideal pipeline. Unfortunately, we cannot find an easy way for Bamboo to **only trigger the Build and Push Service A** job and not Service B’s equivalent. Here is our current implementation of the above scenario:

![Current Pipeline]({{ "/assets/2018-01-07/bamboo-with-artifacts.jpg" | absolute_url }}){: .center-image }

What is different?
- Deployed Versions: An artifact that contains the current versions of the services that are deployed. The Build Service Triggerer will read this artifact at the beginning and write any updates to it at the end of the job.
- Tested Versions: An artifact that contains the versions of Service A and Service B that were tested with each other and passed.
- Build Service Trigger: A job who conditionally runs the Build and Push Service jobs. The job is a shell script that reads in the Deployed Versions artifact and the Tested Versions artifact for each service and checks to see if they are different. If they are different, it uses credentials that were specifically made for this job to cURL the Bamboo API to start the Build and Push job for the changed service.

This solution seems excessive to me, but it is the only one that we could think of with the tools that we are using. We did find a Bamboo plugin that would allow us to conditionally trigger jobs, but the plugin is a premium plugin that requires knowledge of a different language. For us, the benefit of not needing any premium software that we could easily understand has left us with where we are today.

Thoughts?
