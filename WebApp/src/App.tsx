// Copyright 2022 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy
// of the license at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

import { FC } from "react";
import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";

import { GraphQLProvider } from "./GraphQL";
import { Notices } from "./Notices";
import { InputForm } from "./Input";
import { Inspect } from "./Inspect";
import { Network } from "./Network";
import { Vouchers } from "./Vouchers";
import { Reports } from "./Reports";
import configFile from "./config.json";

import { Label } from "./components/ui/label"

const config: any = configFile;

const injected: any = injectedModule();
init({
    wallets: [injected],
    chains: Object.entries(config).map(([k, v]: [string, any], i) => ({id: k, token: v.token, label: v.label, rpcUrl: v.rpcUrl})),
    appMetadata: {
        name: "Cartesi Rollups Test DApp",
        icon: "<svg><svg/>",
        description: "Demo app for Cartesi Rollups",
        recommendedInjectedWallets: [
            { name: "MetaMask", url: "https://metamask.io" },
        ],
    },
});

const App: FC = () => {
    return (
        <div className="my-8">
            <Label className="m-8 text-3xl font-bold">TeachAI Dashboard</Label>
            <Network />
            <GraphQLProvider>
                <Label className="ml-8 text-2xl">Inspect</Label>
                <Inspect />
                <Label className="ml-8 text-2xl">Input</Label>
                <InputForm />
                <Label className="ml-8 text-2xl">Notices</Label>
                <Notices />
                <Label className="ml-8 text-2xl">Reports</Label>
                <Reports />
                <Label className="ml-8 text-2xl">Vouchers</Label>
                <Vouchers />
            </GraphQLProvider>
        </div>
    );
};

export default App;
