"use strict";
/*
 * Copyright IBM Corporation 2018
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../../index");
chai_1.should();
describe('Health State test suite', function () {
    for (let state in index_1.State) {
        it(state + ' returns ' + state, function () {
            let result = new index_1.HealthStatus(state).status;
            chai_1.expect(result).to.equal(state, `Should return: ${state}, but returned: ${result}`);
        });
    }
    it('UNKNOWN should always be changed', function () {
        let result = new index_1.HealthStatus(index_1.State.UNKNOWN).status;
        chai_1.expect(result).to.equal(index_1.State.UNKNOWN, `Should return: ${index_1.State.UNKNOWN}, but returned: ${result}`);
    });
});
//# sourceMappingURL=HealthState.test.js.map