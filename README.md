# GivSelf Contracts

Protobuf contract definitions and generated TypeScript types for the GivSelf system.

## Overview

This repo is the single source of truth for all data structures shared between the server and web/mobile clients. Uses [Buf](https://buf.build/) for linting, breaking change detection, and TypeScript code generation via `protoc-gen-es`.

## Proto Definitions

- `energy.proto` — LivePowerData, EnergyTotals, PowerFlows
- `battery.proto` — BatteryDetail, SystemInfo
- `schedule.proto` — TimeSlot, ScheduleState, BatteryMode
- `control.proto` — SetRate/SetSoc/Boost/SetSlot/SetMode requests
- `websocket.proto` — WsServerMessage oneof envelope
- `service.proto` — EnergyService RPC definitions

## Build

```bash
npm install
npm run build    # buf lint + buf generate
npm run pack     # compile TypeScript + create tarball
```

The tarball (`givself-contracts-0.2.0.tgz`) is consumed by the server and web repos as a dependency.

## CI

GitHub Actions lint, generate, and publish the tarball as a build artifact on every push to main.

## License

MIT
