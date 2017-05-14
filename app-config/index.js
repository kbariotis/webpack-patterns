/**
 * Access your configuration using the
 * __CONFIG__ constant. Everything is there
 * and it will be present only if your actually
 * refer to some of its values.
 */
fetch(__CONFIG__.graphql.endpoint)
  .then(function successCallback (data) {
    console.log(data);
  });

/* Use feature flags */
if (__CONFIG__.sentry.is_enabled) {
  /**
   * This block will not be present in the bundle
   * if the flag is false
   */
}
