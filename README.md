# Simple Storage Upgradable

> [ref](https://www.inflearn.com/course/%EB%94%94%EC%95%B1-%ED%95%98%EB%93%9C%ED%96%87-%EC%98%A4%ED%94%88%EC%A0%9C%ED%8E%A0%EB%A6%B0)

`hardhat`과 `openzeppelin` 환경에서 간단한 Upgradable contract를 생성해봅니다.

## init

```shell
yarn init -y
yarn add hardhat --dev
yarn add @openzeppelin/hardhat-upgrades --dev
```

## test

```shell
npx hardhat test
```

## deploy

- `ganache`같은 내부 노드 실행

```shell
npx hardhat node
```

- deploy

```shell
$ npx hardhat run --network localhost ./scripts/SimpleStorageUpgrade.deploy.js
SimpleStorageUpgrade deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
```

- check

```shell
$ npx hardhat console --network localhost

Welcome to Node.js v14.15.1.
Type ".help" for more information.
> const f = await ethers.getContractFactory("SimpleStorageUpgrade")
undefined
> const ssu = await f.attach("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0")
undefined
> ssu.address
'0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
> (await ssu.get()).toString()
'500'
> let tx = await ssu.set(1000)
undefined
> (await ssu.get()).toString()
'1000'
```
