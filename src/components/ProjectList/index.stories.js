import React from 'react';

import { ProjectList } from '.';

export default {
  title: 'Components|ProjectList',
  component: ProjectList,
};

const projects = [{"node":{"id":"a26e683c-dacd-5c82-adad-6d6899b1fa20","excerpt":"Proposal Stage Draft Tags Created Date Lead Sara Rijo / André Santos Slack Channel 📃 Idea in brief: Question to be resolved and why…","frontmatter":{"title":"App Propogation Prediction"},"fields":{"slug":"/project/app_propagation_prediction/"}}},{"node":{"id":"605a4784-b95d-5c2b-9416-57ef0585299f","excerpt":"Helpful Engineers Community Proposal Stage In progress Tags Community Created Date March 14th Lead João Neves Slack Channel #software…","frontmatter":{"title":"Community"},"fields":{"slug":"/project/community/"}}},{"node":{"id":"19a3957c-a19f-52a2-9d6d-6bee8244b85b","excerpt":"Proposal Stage Draft Tags Created Date Lead Carlos Carreira (author) Slack Channel 📃 Idea in brief: Question to be resolved and why…","frontmatter":{"title":"Advice App"},"fields":{"slug":"/project/advice_app/"}}},{"node":{"id":"2fd16d57-20eb-5b77-abf8-a5bd8e45584a","excerpt":"Proposal Stage Draft Tags Created Date Lead Bruno Silva Slack Channel 📃 Idea in brief: Question to be resolved and why 💥 Problem News say…","frontmatter":{"title":"App Quarantine Information"},"fields":{"slug":"/project/app_quarantine_information/"}}},{"node":{"id":"2c8b3bb2-a47f-5b48-ab30-62c43cfb856a","excerpt":"Proposal Stage Draft Tags Created Date Lead Francisco Veiga Slack Channel 📃 Idea in brief: Question to be resolved and why 💥 Problem In…","frontmatter":{"title":"Heatpmap App"},"fields":{"slug":"/project/heatpmap_app/"}}},{"node":{"id":"b5f961ba-c4b4-52a4-876b-9dc6bb7c8f9e","excerpt":"Proposal Stage Draft Tags Created Date Lead Susana Rosa Slack Channel 📃 Idea in brief: Question to be resolved and why 💥 Problem People…","frontmatter":{"title":"Location Crowdsourcing"},"fields":{"slug":"/project/location_crowdsourcing/"}}},{"node":{"id":"cc9d92b5-2659-5302-a02b-ce5599a9250a","excerpt":"Proposal Stage Initial Tags tickets, calls, support Created Date Mar 2013 Lead chestnutKugelblitz(?) - better to find somebody with…","frontmatter":{"title":"Medication Consultation Center"},"fields":{"slug":"/project/medical_consultation_center/"}}},{"node":{"id":"91429b1d-96c1-5a07-8a91-ea7c4225debe","excerpt":"Proposal Stage Draft Tags Created Date Author Doug Leads Jao Faria, Lucia Carreira Slack Channel Trello Board https://trello.com/b/2QLITR5U…","frontmatter":{"title":"Neighbourhood Assistance"},"fields":{"slug":"/project/neighbourhood_assistance/"}}},{"node":{"id":"088c89e3-6e8a-5139-878a-23d9196a1186","excerpt":"Proposal Stage Proposal Tags Created Date 14 March 2020 Lead Ruurd Moelker (proposal) Slack Channel 📃 Idea in brief: Question to be…","frontmatter":{"title":"Hardware Production Capabilities Database"},"fields":{"slug":"/project/hardware-production-capabilities-database/"}}},{"node":{"id":"ff9850ee-6620-5c48-ac10-b92053696a2b","excerpt":"Proposal Stage Draft Tags Created Date Lead Ann K. Hoang (owner) Slack Channel 📃 Idea in brief: Question to be resolved and why 💥 Problem…","frontmatter":{"title":"Person Projective Equipment"},"fields":{"slug":"/project/person_projective_equipment/"}}},{"node":{"id":"f8d5bd92-8883-5b4a-b060-5ffd4ffc1e71","excerpt":"Proposal Stage Draft Tags Location tracking, Google maps Created Date Lead Mark Xu (author) Slack Channel 📃 Idea in brief: Question to be…","frontmatter":{"title":"Quarantine Location Tracking"},"fields":{"slug":"/project/quarantine_location_tracking/"}}},{"node":{"id":"6e763bdd-7c91-5f39-bcb3-ce0f7ccb09b1","excerpt":"Proposal Stage Draft Tags Machine learning, sentiment analysis, data mining Created Date Lead James M (author) Slack Channel 📃 Idea in…","frontmatter":{"title":"Sentiment Analysis"},"fields":{"slug":"/project/sentiment_analysis/"}}},{"node":{"id":"1006803f-3021-5158-9e11-f905fdc76655","excerpt":"Proposal Stage Draft Tags volunteer, impact Created Date Lead Charles He Slack Channel project-volunteer_app 📃 Idea in brief: Question to…","frontmatter":{"title":"Volunteering System"},"fields":{"slug":"/project/volunterring_system/"}}},{"node":{"id":"33d1c01f-8a7e-5e98-94c7-a0ff76b4cd09","excerpt":"Proposal Stage Tags Created Date Lead Pedro Filipe Slack Channel 📃 Idea in brief: Question to be resolved and why 💥 Problem…","frontmatter":{"title":"Web App Resource Management"},"fields":{"slug":"/project/web_app_resource_management/"}}},{"node":{"id":"422dd69e-2919-52be-8bd3-6e20943faf7a","excerpt":"Proposal Stage Draft Tags Created Date Lead Henrique Mota Slack Channel 📃 Idea in brief: Question to be resolved and why 💥 Problem Medical…","frontmatter":{"title":"Tracking App"},"fields":{"slug":"/project/tracking_app/"}}},{"node":{"id":"d96ca972-7661-531d-86d2-3e5f949cd87a","excerpt":"Zero2: Self-monitoring app A mobile app to support individuals in checking their health and provide insights to structure a more effective…","frontmatter":{"title":"Self Monitoring App O2"},"fields":{"slug":"/project/self-monitoring-app-o2/"}}},{"node":{"id":"e5fd5e5d-99d2-5779-b65d-b37773549003","excerpt":"Web medical \"call\" center Proposal Stage Draft Tags Created Date March 14, 2020 Lead Slack Channel 📃 Idea in brief: Question to be resolved…","frontmatter":{"title":"Web Medical Call Center"},"fields":{"slug":"/project/web_medical_call_center/"}}},{"node":{"id":"401df6b6-0912-5bee-b1e9-c73eccdc22fa","excerpt":"Proposal Stage Draft Tags Created Date Lead Danie E. Twedt (author) Slack Channel 📃 Idea in brief: Question to be resolved and why…","frontmatter":{"title":"Worldwide Radio Equipment"},"fields":{"slug":"/project/worldwide_radio_equipment/"}}},{"node":{"id":"c795b11f-3de4-5222-96b9-de2ecb907f63","excerpt":"Proposal Stage Draft Tags Created Date Lead Henrique Mota Slack Channel 📃 Idea in brief: Question to be resolved and why Track each user to…","frontmatter":{"title":"Where Am I Solution"},"fields":{"slug":"/project/whereamI_solution/"}}}]

export const simple = () => <ProjectList projects={projects} />;