import { View } from "../../core/view";

export function getComponentModule(elementName: string, namespace: string, attributes: Object, exports: Object, moduleNamePath?: string): ComponentModule;
export function setPropertyValue(instance: View, instanceModuleExports: Object, pageExports: Object, propertyName: string, propertyValue: any): void;

export interface ComponentModule {
    component: View;
    exports: any;
}
