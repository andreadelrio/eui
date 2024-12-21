/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import isEqual from 'lodash/isEqual';
import { uniqueId } from 'lodash';
export const VIS_COLOR_STORE_EVENTS = {
    UPDATE: 'UPDATE',
};
class EuiVisColorStoreImpl {
    constructor(dependencies) {
        this.events = {};
        this.setVisColors = (colors, hasColorAdjustment) => {
            if (!isEqual(this._visColors, colors) ||
                hasColorAdjustment !== this._hasVisColorAdjustment) {
                this._visColors = colors;
                if (hasColorAdjustment != null) {
                    this._hasVisColorAdjustment = hasColorAdjustment;
                }
                this.publishUpdate(VIS_COLOR_STORE_EVENTS.UPDATE, this._visColors);
            }
        };
        this.subscribe = (eventName, callback) => {
            if (this.events[eventName] == null) {
                this.events[eventName] = new Map();
            }
            const id = uniqueId(`${eventName}_`);
            this.events[eventName].set(id, callback);
            return id;
        };
        this.unsubscribe = (eventName, id) => {
            if (this.events[eventName] != null && this.events[eventName].has(id)) {
                this.events[eventName].delete(id);
            }
        };
        this.publishUpdate = (eventName, colors) => {
            if (this.events[eventName])
                this.events[eventName].forEach((callback) => {
                    // use timeout to execute callbacks after theme updates
                    setTimeout(() => {
                        callback?.(colors);
                    });
                });
        };
        this._visColors = dependencies.defaultColors;
        this._hasVisColorAdjustment = dependencies.hasVisColorAdjustment;
    }
    get visColors() {
        return this._visColors;
    }
    get hasVisColorAdjustment() {
        return this._hasVisColorAdjustment;
    }
}
export class EuiVisColorStore {
    static getInstance(defaultColors, hasVisColorAdjustment) {
        if (!this.instance) {
            this.instance = new EuiVisColorStoreImpl({
                defaultColors,
                hasVisColorAdjustment,
            });
        }
        return this.instance;
    }
}
//# sourceMappingURL=vis_color_store.js.map