(function () {
  var page = document.body.getAttribute('data-page') || '';
  var nav = `
    <a href="calendar.html"><img class="logo" src="assets/logo.png" alt="RJ Business Solutions" /></a>
    <nav class="nav">
      <a class="item" data-page="calendar" href="calendar.html">
        <svg viewBox="0 0 21 23" fill="none"><path d="M19.5 9.5H1.5M14.5 1.5V5.5M6.5 1.5V5.5M6.3 21.5H14.7C16.38 21.5 17.22 21.5 17.86 21.17A3.5 3.5 0 0 0 19.17 19.86C19.5 19.22 19.5 18.38 19.5 16.7V8.3C19.5 6.62 19.5 5.78 19.17 5.14A3.5 3.5 0 0 0 17.86 3.83C17.22 3.5 16.38 3.5 14.7 3.5H6.3C4.62 3.5 3.78 3.5 3.14 3.83A3.5 3.5 0 0 0 1.83 5.14C1.5 5.78 1.5 6.62 1.5 8.3V16.7C1.5 18.38 1.5 19.22 1.83 19.86A3.5 3.5 0 0 0 3.14 21.17C3.78 21.5 4.62 21.5 6.3 21.5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Calendar
      </a>
      <a class="item" data-page="agent" href="agent.html">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7v3H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v1a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-1h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1V9a7 7 0 0 0-7-7Z"/></svg>
        Agent
      </a>
      <a class="item" data-page="analytics" href="analytics.html">
        <svg viewBox="0 0 20 19" fill="none"><path d="M18.5 18H3V1M18.5 4.8 13.4 9.9 10.5 7.1 5.3 12.3M18.5 4.8H14.7V8.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Analytics
      </a>
      <a class="item" data-page="media" href="media.html">
        <svg viewBox="0 0 20 21" fill="none"><path d="M7.5 3 6.7 7.2M13.3 3l-.8 4.2M18.3 7.2H1.7M5.7 18h8.6c1.4 0 2.1 0 2.6-.3a3 3 0 0 0 1.1-1.1c.3-.5.3-1.2.3-2.6V7c0-1.4 0-2.1-.3-2.6a3 3 0 0 0-1.1-1.1C16.4 3 15.7 3 14.3 3H5.7C4.3 3 3.6 3 3 3.3a3 3 0 0 0-1.1 1.1C1.7 4.9 1.7 5.6 1.7 7v7c0 1.4 0 2.1.3 2.6a3 3 0 0 0 1.1 1.1c.5.3 1.2.3 2.6.3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Media
      </a>
      <a class="item" data-page="plugs" href="plugs.html">
        <svg viewBox="0 0 18 19" fill="none"><path d="M11.7 6.2 14 3.9A6 6 0 0 0 6.9 6.5a6 6 0 0 0 .2 1.2L1.5 14.5a2.5 2.5 0 0 0 3.5 3.5l6.8-6.8A6 6 0 0 0 16.6 4.5L14.2 6.8a1.5 1.5 0 0 1-2.1 0L11.7 6.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Plugs
      </a>
      <a class="item" data-page="integrations" href="integrations.html">
        <svg viewBox="0 0 20 19" fill="none"><path d="M6.2 3.1A2.1 2.1 0 0 1 8.3 1a2.1 2.1 0 0 1 2.1 2.1V4.4h.9c1.2 0 1.8 0 2.2.2a3 3 0 0 1 1.4 1.4c.2.4.2 1 .2 2.2h1.3A2.1 2.1 0 0 1 18.5 10.4a2.1 2.1 0 0 1-2.1 2.1H15.1V13.9c0 1.4 0 2.1-.3 2.7a3 3 0 0 1-1.1 1.1c-.5.3-1.3.3-2.7.3h-.6v-1.5A2.1 2.1 0 0 0 8.5 14.6a2.1 2.1 0 0 0-1.9 2.1V18H5.6c-1.4 0-2.1 0-2.7-.3a3 3 0 0 1-1.1-1.1C1.5 16 1.5 15.3 1.5 13.9v-1.4H2.8A2.1 2.1 0 0 0 4.9 10.4 2.1 2.1 0 0 0 2.8 8.2H1.5c0-1.2 0-1.8.2-2.2a3 3 0 0 1 1.4-1.4c.4-.2 1-.2 2.2-.2h.9V3.1Z" stroke="currentColor" stroke-width="1.5"/></svg>
        Integrations
      </a>
      <a class="item" data-page="billing" href="billing.html">
        <svg viewBox="0 0 20 21" fill="none"><path d="M7 12.7c0 1.1.9 2 2 2h1.8a2.1 2.1 0 0 0 0-4.2H9.2A2.1 2.1 0 1 1 9.2 6.3h1.8c1.1 0 2 .9 2 2M10 5.1v1.2M10 14.7v1.2M18.3 10.5A8.3 8.3 0 1 1 1.7 10.5a8.3 8.3 0 0 1 16.6 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Billing
      </a>
      <a class="item" data-page="settings" href="settings.html">
        <svg viewBox="0 0 20 21" fill="none"><circle cx="10" cy="10.5" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M7.8 16.6 8.3 17.7A2.5 2.5 0 0 0 10 18.8a2.5 2.5 0 0 0 1.7-1.1l.5-1.1a3 3 0 0 1 2-1.2l1.2.1a2.5 2.5 0 0 0 1.8-4.3l-.7-1a3 3 0 0 1 0-2.4l.7-1A2.5 2.5 0 0 0 15.4 5.4l-1.2.1a3 3 0 0 1-2-1.2L11.7 3.2A2.5 2.5 0 0 0 8.3 3.2L7.8 4.4a3 3 0 0 1-2 1.2l-1.2-.1A2.5 2.5 0 0 0 2.8 8.8l.7 1a3 3 0 0 1 0 2.4l-.7 1A2.5 2.5 0 0 0 4.6 17l1.2-.1a3 3 0 0 1 2 1.2Z" stroke="currentColor" stroke-width="1.5"/></svg>
        Settings
      </a>
    </nav>
  `;
  var rail = document.getElementById('rail');
  if (rail) rail.innerHTML = nav;
  if (window.RJ && RJ.markActive) RJ.markActive(page);
})();
