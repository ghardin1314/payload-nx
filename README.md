# PAYLOAD - NX

Minimal example to show error loading local library into payload.config.ts

## Steps to reproduce

1. Clone library
2. Install dependencies with `yarn`
3. Start payload server with `nx serve payload`

You should get the error:

```bash
[20:06:11] INFO (payload): Starting Payload...
Error: Cannot find module '@cms/collections'
```

[payload config](./apps/payload/payload.config.ts)
