import {
  BlockchainType,
  ChainDenominationEnum,
  ChainEnum,
  ChainIdentifierEnum,
  ChainScannerLinksEnum,
  ChainShortNameEnum,
  ChainTokenOracleEtherUSDEnum,
  ContractsEnum,
  LoanType,
  TokenContractAddresses,
} from "common"

import { Chain } from "wagmi"

export function generateChainDenomination(chain: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ChainDenominationEnum.erc
    case ChainEnum.optimism:
      return ChainDenominationEnum.optimism
    case ChainEnum.bsc:
      return ChainDenominationEnum.bsc
    case ChainEnum.polygon:
      return ChainDenominationEnum.polygon
    case ChainEnum.arbitrum:
      return ChainDenominationEnum.arbitrum
    default:
      return ChainDenominationEnum.erc
  }
}

export function generateChainIdentifier(chain: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ChainIdentifierEnum.erc
    case ChainEnum.optimism:
      return ChainIdentifierEnum.optimism
    case ChainEnum.bsc:
      return ChainIdentifierEnum.bsc
    case ChainEnum.polygon:
      return ChainIdentifierEnum.polygon
    case ChainEnum.arbitrum:
      return ChainIdentifierEnum.arbitrum
    default:
      return ChainIdentifierEnum.erc
  }
}

export function generateChainBase(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ChainScannerLinksEnum.erc
    case ChainEnum.bsc:
      return ChainScannerLinksEnum.bsc
    case ChainEnum.polygon:
      return ChainScannerLinksEnum.polygon
    case ChainEnum.arbitrum:
      return ChainScannerLinksEnum.arbitrum
    case ChainEnum.optimism:
      return ChainScannerLinksEnum.optimism
    default:
      return ChainScannerLinksEnum.erc
  }
}

export function generateChainAbbreviation(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ChainDenominationEnum.erc
    case ChainEnum.bsc:
      return ChainDenominationEnum.bsc
    case ChainEnum.arbitrum:
      return ChainDenominationEnum.arbitrum
    case ChainEnum.optimism:
      return ChainDenominationEnum.optimism
    case ChainEnum.polygon:
      return ChainDenominationEnum.polygon
    default:
      return "ETH"
  }
}

export function generateChainShortName(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ChainShortNameEnum.erc
    case ChainEnum.bsc:
      return ChainShortNameEnum.bsc
    case ChainEnum.arbitrum:
      return ChainShortNameEnum.arbitrum
    case ChainEnum.optimism:
      return ChainShortNameEnum.optimism
    case ChainEnum.polygon:
      return ChainShortNameEnum.polygon
    default:
      return ChainShortNameEnum.erc
  }
}

export function generateNativeQueryCommands(chainId?: BlockchainType) {
  switch (chainId) {
    case ChainEnum.erc:
      return { nativeCurrency: "ethereum" }
    case ChainEnum.bsc:
      return { nativeCurrency: "binancecoin" }
    case ChainEnum.polygon:
      return { nativeCurrency: "matic" }
    case ChainEnum.optimism:
      return { nativeCurrency: "ethereum" }
    case ChainEnum.arbitrum:
      return { nativeCurrency: "ethereum" }
    default:
      return { nativeCurrency: "ethereum" }
  }
}

export function generateChainEtherTokenEnum(chainId?: BlockchainType) {
  switch (chainId) {
    case ChainEnum.erc:
      return TokenContractAddresses.WETH
    case ChainEnum.bsc:
      return TokenContractAddresses.BNB
    case ChainEnum.polygon:
      return TokenContractAddresses.MATIC
    case ChainEnum.arbitrum:
      return TokenContractAddresses.WETH
    case ChainEnum.optimism:
      return TokenContractAddresses.WETH
    default:
      return TokenContractAddresses.WETH
  }
}

export function generateChainTokenOracleEtherUSDEnum(chainId?: BlockchainType) {
  switch (chainId) {
    case ChainEnum.erc:
      return ChainTokenOracleEtherUSDEnum.erc
    case ChainEnum.bsc:
      return ChainTokenOracleEtherUSDEnum.bsc
    case ChainEnum.polygon:
      return ChainTokenOracleEtherUSDEnum.polygon
    case ChainEnum.arbitrum:
      return ChainTokenOracleEtherUSDEnum.arbitrum
    case ChainEnum.optimism:
      return ChainTokenOracleEtherUSDEnum.optimism
    default:
      return ChainTokenOracleEtherUSDEnum.erc
  }
}

export function generateX7InitialLiquidityLoanTermContract(loantype: LoanType) {
  switch (loantype) {
    case "001":
      return ContractsEnum.X7InitialLiquidityLoanTerm001
    case "002":
      return ContractsEnum.X7InitialLiquidityLoanTerm002
    case "003":
      return ContractsEnum.X7InitialLiquidityLoanTerm003
    default:
      return ContractsEnum.X7InitialLiquidityLoanTerm001
  }
}

export function providerLinkGenerator(chain: Chain) {
  switch (chain?.id) {
    case ChainEnum.erc: {
      return {
        ankr: "eth",
        blast: "eth-mainnet",
        blockpi: "ethereum",
        getblock: "eth",
        pocket: "eth-mainnet",
      }
    }
    case ChainEnum.bsc: {
      return {
        ankr: "bsc",
        blast: "bsc-mainnet",
        blockpi: "bsc",
        getblock: "bsc",
        pocket: "bsc-mainnet",
      }
    }
    case ChainEnum.polygon: {
      return {
        ankr: "polygon",
        blast: "polygon-mainnet",
        blockpi: "polygon",
        getblock: "matic",
        pocket: "poly-mainnet",
      }
    }
    case ChainEnum.optimism: {
      return {
        ankr: "optimism",
        blast: "optimism-mainnet",
        blockpi: "optimism",
        getblock: "op",
        pocket: "optimism-mainnet",
      }
    }
    case ChainEnum.arbitrum: {
      return {
        ankr: "arbitrum",
        blast: "eth-mainnet",
        blockpi: "arbitrum",
        getblock: "arbitrum",
        pocket: "arbitrum-one",
      }
    }
  }
}
