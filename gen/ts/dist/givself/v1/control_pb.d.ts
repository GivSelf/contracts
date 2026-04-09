import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { BatteryMode, TimeSlot } from "./schedule_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file givself/v1/control.proto.
 */
export declare const file_givself_v1_control: GenFile;
/**
 * @generated from message givself.v1.SetRateRequest
 */
export type SetRateRequest = Message<"givself.v1.SetRateRequest"> & {
    /**
     * @generated from field: int32 percent = 1;
     */
    percent: number;
};
/**
 * Describes the message givself.v1.SetRateRequest.
 * Use `create(SetRateRequestSchema)` to create a new message.
 */
export declare const SetRateRequestSchema: GenMessage<SetRateRequest>;
/**
 * @generated from message givself.v1.SetSocRequest
 */
export type SetSocRequest = Message<"givself.v1.SetSocRequest"> & {
    /**
     * @generated from field: int32 soc_percent = 1;
     */
    socPercent: number;
};
/**
 * Describes the message givself.v1.SetSocRequest.
 * Use `create(SetSocRequestSchema)` to create a new message.
 */
export declare const SetSocRequestSchema: GenMessage<SetSocRequest>;
/**
 * @generated from message givself.v1.BoostRequest
 */
export type BoostRequest = Message<"givself.v1.BoostRequest"> & {
    /**
     * @generated from field: int32 duration_minutes = 1;
     */
    durationMinutes: number;
};
/**
 * Describes the message givself.v1.BoostRequest.
 * Use `create(BoostRequestSchema)` to create a new message.
 */
export declare const BoostRequestSchema: GenMessage<BoostRequest>;
/**
 * @generated from message givself.v1.SetSlotRequest
 */
export type SetSlotRequest = Message<"givself.v1.SetSlotRequest"> & {
    /**
     * @generated from field: int32 index = 1;
     */
    index: number;
    /**
     * @generated from field: givself.v1.TimeSlot slot = 2;
     */
    slot?: TimeSlot;
};
/**
 * Describes the message givself.v1.SetSlotRequest.
 * Use `create(SetSlotRequestSchema)` to create a new message.
 */
export declare const SetSlotRequestSchema: GenMessage<SetSlotRequest>;
/**
 * @generated from message givself.v1.SetModeRequest
 */
export type SetModeRequest = Message<"givself.v1.SetModeRequest"> & {
    /**
     * @generated from field: givself.v1.BatteryMode mode = 1;
     */
    mode: BatteryMode;
};
/**
 * Describes the message givself.v1.SetModeRequest.
 * Use `create(SetModeRequestSchema)` to create a new message.
 */
export declare const SetModeRequestSchema: GenMessage<SetModeRequest>;
/**
 * @generated from message givself.v1.EnableRequest
 */
export type EnableRequest = Message<"givself.v1.EnableRequest"> & {
    /**
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
};
/**
 * Describes the message givself.v1.EnableRequest.
 * Use `create(EnableRequestSchema)` to create a new message.
 */
export declare const EnableRequestSchema: GenMessage<EnableRequest>;
/**
 * @generated from message givself.v1.Empty
 */
export type Empty = Message<"givself.v1.Empty"> & {};
/**
 * Describes the message givself.v1.Empty.
 * Use `create(EmptySchema)` to create a new message.
 */
export declare const EmptySchema: GenMessage<Empty>;
