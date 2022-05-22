import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options;
  const hostname = ssrContext ? ssrContext.req.headers.host : location.host;
  console.log(options.routes, hostname, subdomains(options.routes));
  return new Router({
    ...options,
    routes: allRouts(options.routes, hostname),
  });

  function allRouts(defaultRoutes, hostname) {
    if (hostname.includes("demo")) return subdomains(defaultRoutes, "domain1");
    if (hostname.includes("live")) return subdomains(defaultRoutes, "domain2");
    return rootdomain(defaultRoutes);
  }

  function subdomains(defaultRoutes, filter) {
    const route = defaultRoutes.find((r) => r.name == filter)
      ? defaultRoutes.find((r) => r.name == filter)
      : {};
    route.path = "/";
    return [route];
  }

  function rootdomain(defaultRoutes) {
    return defaultRoutes.filter((r) => r.name != "domain1" && "domain2");
  }
}
