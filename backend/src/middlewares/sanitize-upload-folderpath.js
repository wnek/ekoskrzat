module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    try {
      if (ctx.method === "GET" && ctx.path === "/upload/files") {
        const query = ctx.request.query || {};
        const filters = query.filters || {};
        const andFilters = Array.isArray(filters.$and) ? filters.$and : [];
        const first = andFilters[0] || {};
        const folderPathContainer = first.folderPath || {};
        let folderPathEq = folderPathContainer.$eq;

        if (typeof folderPathEq === "string") {
          // Strip anything after a '?' which indicates an appended query string
          const clean = folderPathEq.split("?")[0] || "/";
          folderPathEq = clean;
        }

        if (typeof folderPathEq !== "string" || folderPathEq.length === 0) {
          folderPathEq = "/";
        }

        // Rebuild a safe filters object
        query.filters = { $and: [{ folderPath: { $eq: folderPathEq } }] };

        // Apply back to the request
        ctx.request.query = query;
      }
    } catch (err) {
      strapi.log.warn(
        `sanitize-upload-folderpath middleware encountered an error: ${err.message}`
      );
    }

    await next();
  };
};


