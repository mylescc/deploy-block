# Deploy Block

This action is designed to block merging Pull Requests submitted after a certain time each day. No more 5pm on Friday deployments!

## Inputs

### timezone

**required** Set the timezone you'd like to use. Defaults to `Europe/London`.

### monday

Set if you'd like block deploys after a certain time on Mondays. Format: `1815`.

### tuesday

Set if you'd like block deploys after a certain time on Tuesdays. Format: `1815`.

### wednesday

Set if you'd like block deploys after a certain time on Wednesdays. Format: `1815`.

### thursday

Set if you'd like block deploys after a certain time on Thursdays. Format: `1815`.

### friday

Set if you'd like block deploys after a certain time on Fridays. Format: `1815`.

### saturday

Set if you'd like block deploys after a certain time on Saturdays. Format: `1815`.

### sunday

Set if you'd like block deploys after a certain time on Sundays. Format: `1815`.


## Example usage

```
uses: thrivadev/deploy-block@v1
with:
  timezone: 'Europe/London'
  monday: '2000'
  tuesday: '2000'
  wednesday: '2000'
  thursday: '2000'
  friday: '1500'
```
