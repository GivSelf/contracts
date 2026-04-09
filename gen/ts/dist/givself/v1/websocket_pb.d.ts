import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EnergyTotals, LivePowerData } from "./energy_pb.js";
import type { BatteryDetail } from "./battery_pb.js";
import type { ScheduleState } from "./schedule_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file givself/v1/websocket.proto.
 */
export declare const file_givself_v1_websocket: GenFile;
/**
 * @generated from message givself.v1.BoostState
 */
export type BoostState = Message<"givself.v1.BoostState"> & {
    /**
     * @generated from field: bool active = 1;
     */
    active: boolean;
    /**
     * @generated from field: string kind = 2;
     */
    kind: string;
    /**
     * @generated from field: int32 remaining_seconds = 3;
     */
    remainingSeconds: number;
};
/**
 * Describes the message givself.v1.BoostState.
 * Use `create(BoostStateSchema)` to create a new message.
 */
export declare const BoostStateSchema: GenMessage<BoostState>;
/**
 * @generated from message givself.v1.SystemStatus
 */
export type SystemStatus = Message<"givself.v1.SystemStatus"> & {
    /**
     * @generated from field: bool connected = 1;
     */
    connected: boolean;
    /**
     * @generated from field: string adapter = 2;
     */
    adapter: string;
};
/**
 * Describes the message givself.v1.SystemStatus.
 * Use `create(SystemStatusSchema)` to create a new message.
 */
export declare const SystemStatusSchema: GenMessage<SystemStatus>;
/**
 * @generated from message givself.v1.BatteriesUpdate
 */
export type BatteriesUpdate = Message<"givself.v1.BatteriesUpdate"> & {
    /**
     * @generated from field: repeated givself.v1.BatteryDetail batteries = 1;
     */
    batteries: BatteryDetail[];
};
/**
 * Describes the message givself.v1.BatteriesUpdate.
 * Use `create(BatteriesUpdateSchema)` to create a new message.
 */
export declare const BatteriesUpdateSchema: GenMessage<BatteriesUpdate>;
/**
 * @generated from message givself.v1.WsServerMessage
 */
export type WsServerMessage = Message<"givself.v1.WsServerMessage"> & {
    /**
     * @generated from oneof givself.v1.WsServerMessage.payload
     */
    payload: {
        /**
         * @generated from field: givself.v1.LivePowerData live_power = 1;
         */
        value: LivePowerData;
        case: "livePower";
    } | {
        /**
         * @generated from field: givself.v1.EnergyTotals live_energy = 2;
         */
        value: EnergyTotals;
        case: "liveEnergy";
    } | {
        /**
         * @generated from field: givself.v1.BatteriesUpdate live_batteries = 3;
         */
        value: BatteriesUpdate;
        case: "liveBatteries";
    } | {
        /**
         * @generated from field: givself.v1.SystemStatus system_status = 4;
         */
        value: SystemStatus;
        case: "systemStatus";
    } | {
        /**
         * @generated from field: givself.v1.BoostState boost_state = 5;
         */
        value: BoostState;
        case: "boostState";
    } | {
        /**
         * @generated from field: givself.v1.ScheduleState schedule_updated = 6;
         */
        value: ScheduleState;
        case: "scheduleUpdated";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message givself.v1.WsServerMessage.
 * Use `create(WsServerMessageSchema)` to create a new message.
 */
export declare const WsServerMessageSchema: GenMessage<WsServerMessage>;
