// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "VedaTrace's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/kurtiz', label: 'GitHub' },
    { link: 'https://iamaaronwilldjaba.me/', label: 'Blog' },
    { link: 'mailto:aaronwilldjaba@outlook.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'vedatrace',
      // `name` is used at status page and callback message
      name: 'VedaTrace Dashboard',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://vedatrace.dev',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'VedaTrace Dashboard - Simplified Observability Dashboard',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://vedatrace.dev',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'ingest-vedatrace',
      // `name` is used at status page and callback message
      name: 'VedaTrace Ingestion Module',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://ingest.vedatrace.dev/health',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'VedaTrace Ingestion Module',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://status.vedatrace.dev',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'waitlist-vedatrace',
      // `name` is used at status page and callback message
      name: 'VedaTrace Waitlist',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://waitlist.vedatrace.dev',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'Join The Waitlist And Newsletter',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://waitlist.vedatrace.dev',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  // {
    // [Optional] Monitor IDs to be affected by this maintenance
    // monitors: ['foo_monitor', 'bar_monitor'],
    // // [Optional] default to "Scheduled Maintenance" if not specified
    // title: 'Test Maintenance',
    // // Description of the maintenance, will be shown at status page
    // body: 'This is a test maintenance, server software upgrade',
    // // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    // start: '2020-01-01T00:00:00+08:00',
    // // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // // if not specified, the maintenance will be considered as on-going
    // end: '2050-01-01T00:00:00+08:00',
    // // [Optional] color of the maintenance alert at status page, default to "yellow"
    // color: 'blue',
  // },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
