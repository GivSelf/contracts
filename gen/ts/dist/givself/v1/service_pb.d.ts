import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv2";
import type { EnergyTotalsSchema, LivePowerDataSchema } from "./energy_pb.js";
import type { SystemInfoSchema } from "./battery_pb.js";
import type { ScheduleStateSchema } from "./schedule_pb.js";
import type { BoostRequestSchema, EmptySchema, EnableRequestSchema, SetModeRequestSchema, SetRateRequestSchema, SetSlotRequestSchema, SetSocRequestSchema } from "./control_pb.js";
import type { BatteriesUpdateSchema } from "./websocket_pb.js";
/**
 * Describes the file givself/v1/service.proto.
 */
export declare const file_givself_v1_service: GenFile;
/**
 * @generated from service givself.v1.EnergyService
 */
export declare const EnergyService: GenService<{
    /**
     * Read
     *
     * @generated from rpc givself.v1.EnergyService.GetLivePower
     */
    getLivePower: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof LivePowerDataSchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.GetEnergyToday
     */
    getEnergyToday: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof EnergyTotalsSchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.GetEnergyTotal
     */
    getEnergyTotal: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof EnergyTotalsSchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.GetBatteries
     */
    getBatteries: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof BatteriesUpdateSchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.GetSystemInfo
     */
    getSystemInfo: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof SystemInfoSchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.GetSchedules
     */
    getSchedules: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof ScheduleStateSchema;
    };
    /**
     * Control
     *
     * @generated from rpc givself.v1.EnergyService.SetChargeRate
     */
    setChargeRate: {
        methodKind: "unary";
        input: typeof SetRateRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.SetDischargeRate
     */
    setDischargeRate: {
        methodKind: "unary";
        input: typeof SetRateRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.SetBatteryReserve
     */
    setBatteryReserve: {
        methodKind: "unary";
        input: typeof SetSocRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.SetChargeTarget
     */
    setChargeTarget: {
        methodKind: "unary";
        input: typeof SetSocRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.SetBatteryMode
     */
    setBatteryMode: {
        methodKind: "unary";
        input: typeof SetModeRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.SetChargeSlot
     */
    setChargeSlot: {
        methodKind: "unary";
        input: typeof SetSlotRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.SetDischargeSlot
     */
    setDischargeSlot: {
        methodKind: "unary";
        input: typeof SetSlotRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.EnableChargeSchedule
     */
    enableChargeSchedule: {
        methodKind: "unary";
        input: typeof EnableRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.EnableDischargeSchedule
     */
    enableDischargeSchedule: {
        methodKind: "unary";
        input: typeof EnableRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * Boost
     *
     * @generated from rpc givself.v1.EnergyService.ForceCharge
     */
    forceCharge: {
        methodKind: "unary";
        input: typeof BoostRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.ForceExport
     */
    forceExport: {
        methodKind: "unary";
        input: typeof BoostRequestSchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.CancelForce
     */
    cancelForce: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof EmptySchema;
    };
    /**
     * System
     *
     * @generated from rpc givself.v1.EnergyService.Reboot
     */
    reboot: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof EmptySchema;
    };
    /**
     * @generated from rpc givself.v1.EnergyService.SyncTime
     */
    syncTime: {
        methodKind: "unary";
        input: typeof EmptySchema;
        output: typeof EmptySchema;
    };
}>;
