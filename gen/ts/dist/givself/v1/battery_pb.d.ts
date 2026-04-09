import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file givself/v1/battery.proto.
 */
export declare const file_givself_v1_battery: GenFile;
/**
 * @generated from message givself.v1.BatteryDetail
 */
export type BatteryDetail = Message<"givself.v1.BatteryDetail"> & {
    /**
     * @generated from field: string serial_number = 1;
     */
    serialNumber: string;
    /**
     * @generated from field: int32 soc = 2;
     */
    soc: number;
    /**
     * @generated from field: float voltage_v = 3;
     */
    voltageV: number;
    /**
     * @generated from field: float temperature_c = 4;
     */
    temperatureC: number;
    /**
     * @generated from field: float capacity_kwh = 5;
     */
    capacityKwh: number;
    /**
     * @generated from field: float design_capacity_kwh = 6;
     */
    designCapacityKwh: number;
    /**
     * @generated from field: float remaining_capacity_kwh = 7;
     */
    remainingCapacityKwh: number;
    /**
     * @generated from field: int32 cycles = 8;
     */
    cycles: number;
    /**
     * @generated from field: repeated float cell_voltages = 9;
     */
    cellVoltages: number[];
    /**
     * @generated from field: repeated float cell_temperatures = 10;
     */
    cellTemperatures: number[];
    /**
     * @generated from field: int32 firmware_version = 11;
     */
    firmwareVersion: number;
};
/**
 * Describes the message givself.v1.BatteryDetail.
 * Use `create(BatteryDetailSchema)` to create a new message.
 */
export declare const BatteryDetailSchema: GenMessage<BatteryDetail>;
/**
 * @generated from message givself.v1.SystemInfo
 */
export type SystemInfo = Message<"givself.v1.SystemInfo"> & {
    /**
     * @generated from field: string model = 1;
     */
    model: string;
    /**
     * @generated from field: string serial_number = 2;
     */
    serialNumber: string;
    /**
     * @generated from field: string firmware_version = 3;
     */
    firmwareVersion: string;
    /**
     * @generated from field: int32 inverter_max_power_w = 4;
     */
    inverterMaxPowerW: number;
    /**
     * @generated from field: int32 battery_max_power_w = 5;
     */
    batteryMaxPowerW: number;
    /**
     * @generated from field: float battery_capacity_kwh = 6;
     */
    batteryCapacityKwh: number;
    /**
     * @generated from field: string battery_type = 7;
     */
    batteryType: string;
    /**
     * @generated from field: int32 num_batteries = 8;
     */
    numBatteries: number;
    /**
     * @generated from field: int32 num_mppt = 9;
     */
    numMppt: number;
    /**
     * @generated from field: int32 num_phases = 10;
     */
    numPhases: number;
};
/**
 * Describes the message givself.v1.SystemInfo.
 * Use `create(SystemInfoSchema)` to create a new message.
 */
export declare const SystemInfoSchema: GenMessage<SystemInfo>;
