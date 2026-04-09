import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file givself/v1/schedule.proto.
 */
export declare const file_givself_v1_schedule: GenFile;
/**
 * @generated from message givself.v1.TimeSlot
 */
export type TimeSlot = Message<"givself.v1.TimeSlot"> & {
    /**
     * @generated from field: string start = 1;
     */
    start: string;
    /**
     * @generated from field: string end = 2;
     */
    end: string;
    /**
     * @generated from field: int32 target_soc = 3;
     */
    targetSoc: number;
};
/**
 * Describes the message givself.v1.TimeSlot.
 * Use `create(TimeSlotSchema)` to create a new message.
 */
export declare const TimeSlotSchema: GenMessage<TimeSlot>;
/**
 * @generated from message givself.v1.ScheduleState
 */
export type ScheduleState = Message<"givself.v1.ScheduleState"> & {
    /**
     * @generated from field: bool charge_enabled = 1;
     */
    chargeEnabled: boolean;
    /**
     * @generated from field: bool discharge_enabled = 2;
     */
    dischargeEnabled: boolean;
    /**
     * @generated from field: repeated givself.v1.TimeSlot charge_slots = 3;
     */
    chargeSlots: TimeSlot[];
    /**
     * @generated from field: repeated givself.v1.TimeSlot discharge_slots = 4;
     */
    dischargeSlots: TimeSlot[];
    /**
     * @generated from field: int32 charge_target_soc = 5;
     */
    chargeTargetSoc: number;
    /**
     * @generated from field: int32 battery_reserve_soc = 6;
     */
    batteryReserveSoc: number;
    /**
     * @generated from field: givself.v1.BatteryMode battery_mode = 7;
     */
    batteryMode: BatteryMode;
};
/**
 * Describes the message givself.v1.ScheduleState.
 * Use `create(ScheduleStateSchema)` to create a new message.
 */
export declare const ScheduleStateSchema: GenMessage<ScheduleState>;
/**
 * @generated from enum givself.v1.BatteryMode
 */
export declare enum BatteryMode {
    /**
     * @generated from enum value: BATTERY_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: BATTERY_MODE_ECO = 1;
     */
    ECO = 1,
    /**
     * @generated from enum value: BATTERY_MODE_TIMED_DEMAND = 2;
     */
    TIMED_DEMAND = 2,
    /**
     * @generated from enum value: BATTERY_MODE_TIMED_EXPORT = 3;
     */
    TIMED_EXPORT = 3
}
/**
 * Describes the enum givself.v1.BatteryMode.
 */
export declare const BatteryModeSchema: GenEnum<BatteryMode>;
