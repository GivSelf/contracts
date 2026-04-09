import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file givself/v1/energy.proto.
 */
export declare const file_givself_v1_energy: GenFile;
/**
 * @generated from message givself.v1.PowerFlows
 */
export type PowerFlows = Message<"givself.v1.PowerFlows"> & {
    /**
     * @generated from field: int32 solar_to_house_w = 1;
     */
    solarToHouseW: number;
    /**
     * @generated from field: int32 solar_to_battery_w = 2;
     */
    solarToBatteryW: number;
    /**
     * @generated from field: int32 solar_to_grid_w = 3;
     */
    solarToGridW: number;
    /**
     * @generated from field: int32 battery_to_house_w = 4;
     */
    batteryToHouseW: number;
    /**
     * @generated from field: int32 battery_to_grid_w = 5;
     */
    batteryToGridW: number;
    /**
     * @generated from field: int32 grid_to_house_w = 6;
     */
    gridToHouseW: number;
    /**
     * @generated from field: int32 grid_to_battery_w = 7;
     */
    gridToBatteryW: number;
};
/**
 * Describes the message givself.v1.PowerFlows.
 * Use `create(PowerFlowsSchema)` to create a new message.
 */
export declare const PowerFlowsSchema: GenMessage<PowerFlows>;
/**
 * @generated from message givself.v1.LivePowerData
 */
export type LivePowerData = Message<"givself.v1.LivePowerData"> & {
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 1;
     */
    timestamp?: Timestamp;
    /**
     * @generated from field: int32 pv_power_w = 2;
     */
    pvPowerW: number;
    /**
     * @generated from field: int32 pv1_power_w = 3;
     */
    pv1PowerW: number;
    /**
     * @generated from field: int32 pv2_power_w = 4;
     */
    pv2PowerW: number;
    /**
     * @generated from field: float pv1_voltage_v = 5;
     */
    pv1VoltageV: number;
    /**
     * @generated from field: float pv2_voltage_v = 6;
     */
    pv2VoltageV: number;
    /**
     * @generated from field: int32 battery_soc = 7;
     */
    batterySoc: number;
    /**
     * @generated from field: float battery_soc_kwh = 8;
     */
    batterySocKwh: number;
    /**
     * @generated from field: int32 battery_power_w = 9;
     */
    batteryPowerW: number;
    /**
     * @generated from field: float battery_voltage_v = 10;
     */
    batteryVoltageV: number;
    /**
     * @generated from field: float battery_temperature_c = 11;
     */
    batteryTemperatureC: number;
    /**
     * @generated from field: int32 grid_power_w = 12;
     */
    gridPowerW: number;
    /**
     * @generated from field: float grid_voltage_v = 13;
     */
    gridVoltageV: number;
    /**
     * @generated from field: float grid_current_a = 14;
     */
    gridCurrentA: number;
    /**
     * @generated from field: float grid_frequency_hz = 15;
     */
    gridFrequencyHz: number;
    /**
     * @generated from field: int32 load_power_w = 16;
     */
    loadPowerW: number;
    /**
     * @generated from field: givself.v1.PowerFlows flows = 17;
     */
    flows?: PowerFlows;
};
/**
 * Describes the message givself.v1.LivePowerData.
 * Use `create(LivePowerDataSchema)` to create a new message.
 */
export declare const LivePowerDataSchema: GenMessage<LivePowerData>;
/**
 * @generated from message givself.v1.EnergyTotals
 */
export type EnergyTotals = Message<"givself.v1.EnergyTotals"> & {
    /**
     * @generated from field: float pv_generation_kwh = 1;
     */
    pvGenerationKwh: number;
    /**
     * @generated from field: float grid_import_kwh = 2;
     */
    gridImportKwh: number;
    /**
     * @generated from field: float grid_export_kwh = 3;
     */
    gridExportKwh: number;
    /**
     * @generated from field: float battery_charge_kwh = 4;
     */
    batteryChargeKwh: number;
    /**
     * @generated from field: float battery_discharge_kwh = 5;
     */
    batteryDischargeKwh: number;
    /**
     * @generated from field: float consumption_kwh = 6;
     */
    consumptionKwh: number;
    /**
     * @generated from field: float self_consumption_kwh = 7;
     */
    selfConsumptionKwh: number;
};
/**
 * Describes the message givself.v1.EnergyTotals.
 * Use `create(EnergyTotalsSchema)` to create a new message.
 */
export declare const EnergyTotalsSchema: GenMessage<EnergyTotals>;
