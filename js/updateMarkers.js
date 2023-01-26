


setTimeout(()=>{
  var selectedValue = "legalStatus";
  updateMarkers(selectedValue);
},500);
// fetch('https://omarthisside.github.io/esyacentre')
// .then((response) => response.json())
// .then((json) => countryData = json);

  var countryData=[  
    {
      "countryName": "Argentina",
      "legalStatus": ["Partial Ban","Financial institutions are banned from transacting in digital assets that are not regulated by the Central Bank. However, this is not a complete ban as domestic cryptocurrency exchanges are still operational."],
      "classification":["No","The Central Bank defined crypto assets as a digital representation of value or rights that are transferred and stored electronically. They are not legal tender. Further, cryptocurrencies cannot be classified as securities as they are not registered pursuant to the Securities and Exchange Commission."],
      "licensing": ["No","There is currently no licensing regime for non-financial institutions offering crypto-related services. A license may be required if the currencies offered qualify as securities."],
      "corporateGovernance": ["No","There are no corporate governance requirements that apply specifically to providers of crypto-related services"],
      "riskManagement": ["No","There are no risk management principles that apply specifically to providers of crypto-related services"],
      "taxation":["Yes","For resident individuals, gains derived from the disposal of digital coins is subject to an income tax of 15%<br/>Resident legal entities are taxed 25-35% on gains from disposing of digital coins<br/>Non-residents who obtain gains from disposing digital coins and there is an Argentine source of income are taxed at a rate of 15%<br/>Residents are taxed on the assets they own at a rate that ranges from 0.50% to 2.25% depending on the value of the assets and where it is located.<br/>A check tax of 0.6% on all transactions involving virtual currencies has also been imposed"],
      "capitalControls":["No","Argentina has a strong capital controls regime, the provisions of which have not been explicitly extended to crypto-assets for the moment. "],
      "amlCft":["Yes","Argentina's anti-money laundering law requires certain entities to have specific reporting obligations. The UIF Resolution of 2014, along with the AML law, requires individuals to report all transactions performed with virtual currencies. <br/>Argentina may revampt its anti-money laundering law to include a registry for virtual asset services providers"],
      "grievanceRedressal":["Partial - General Legislation", "Argentina has a robust consumer protection regime under the Constitution, Civil Code and standalone legislation. Whether entities providing crypto-services are covered under these remains an open question in the absence of specific guidance."],
      "dataProtection":["Partial - General Legislation","There are currently no specific data protection or information security practices that specifically apply to crypto-asset service providers in Argentina even though the country has a data protection regime in place"],
      "advertisingRegulations":["No","No specific regulations or guidelines currently limit crypto-related advertising. However, the head of Argentina's Capital Markets Authority has noted the need to regulate ads put out by CASPs"],
      "lat": "38.4161",
      "lang": "63.6167"
    },
    {
      "countryName": "Australia",
      "legalStatus": ["Legal","While there is currently no specific regulation for crypto-assets in Australia, they may be regulated as collective investment schemes, securities or ETPs<br/>governed under the Corporations Act 2001and the Australian Securities and Investments Commission Act <br/>A proposed framework that comprehensively regulates  is also being worked on"],
      "classification":["Yes","Crypto assets may be classified as different financial products, including exchange-traded products and securities, depending on their functionality and purpose. The Australian Securities and Investments Commission specifies when cryptocurrencies may be considered financial products"],
      "licensing": ["Yes","All 'digital currency' exchanges must register with the AUSTRAC, which is Australia's anti-money laundering watchdog. Additionally, any exchange or crypto service provider that lists or issues currencies classified as financial products requires an 'Australian Financial Services' AFS license <br/>One crypto exchange has obtained a AFS license from ASIC so far."],
      "corporateGovernance": ["Partial","There are currently no corporate governance requirements for CASPs in Australia. However, CASPs have to comply with disclosure and governance requirements under the AFS license if they are offering financial products"],
      "riskManagement": ["Partial","There are currently no risk management requirements for CASPs in Australia. However, CASPs have to comply with reserve and equity requirements under the AFS license  if they are offering financial products"],
      "taxation":["Yes","The Australian Tax Office provides detailed guidance on when earnings from exchanging, trading, selling and issuing crypto-assets will constitute a taxable event. It also specifies when different kinds of tax may become applicable.<br/>GST may be also be applicable in some situations, particularly where supply of mining services is involved."],
      "capitalControls":["No","Australia does not have a capital controls regime"],
      "amlCft":["Yes","New laws for digital currency exchange (DCE) providers operating in Australia have been implemented by AUSTRAC, Australia’s financial intelligence agency and anti-money laundering and counter-terrorism financing (AML/CTF) regulator.<br/>DCEs with a business operation located in Australia must register with AUSTRAC and meet the Government&amp;s AML/CTF compliance and reporting obligations. <br/>The Anti-Money Laundering and Counter-Terrorism Financing Act 2006 requires regulated entities to collect information to establish a customer&amp;s identity, monitor transactional activity, and report to AUSTRAC transactions or activity that is suspicious or involves large amounts of cash over $10,000."],
      "grievanceRedressal":["Partial - General Legislation", "Investors in crypto-assets may have some recourse against deceptive or misleading conduct, but no specific dispute resolution or grievance redressal mechanism is prescribed by Australian Consumer Law"],
      "dataProtection":["Partial - General Legislation","There are currently no specific data protection or information security practices that specifically apply to crypto-asset service providers in Australia, even though the country has a data protection regime in place  (Privacy Act, 1988"],
      "advertisingRegulations":["No","Misleading or deceptive conduct by entities issuing all kinds of crypto assets, including ones that are not classified as financial products."],
      "lat": "-25.2744",
      "lang": "133.7751"
    },
    {
      "countryName": "Brazil",
      "legalStatus": ["Legal","Crypto assets are legal in Brazil but cannot be used for payments. The Parliament has recently passed a law that specifically defines virtual currencies and creates a comprehensive legal framework"],
      "classification":["Proposed","No legislation or regulations currently classify cryptocurrencies. They are generally regulated as goods or assets, but the Capital Market Authorities has investigated some crypto projects as they resembled securities. <br/>The proposed legislation defines virtual currency and recognises different classifications, including security tokens and utility tokens.  "],
      "licensing": ["Proposed","There are currently no licensing requirements for Brazilian crypto-asset service providers. However, CASPs dealing with currencies which are security tokens must register and seek approval from the Capital Markets Authority. <br/>Under the proposed legislation, virtual asset service providers must obtain prior authorisation from an authorised body."],
      "corporateGovernance": ["Proposed","The forthcoming Bill prescribes observance of the principles of good governance as an obligation for VASPs but does not define these principles"],
      "riskManagement": ["No","No capital reserver requirement or risk management practices are prescribed currently. Previous version of the past Bill required VASPs to separate assets, but this provision was omitted in the most recent draft"],
      "taxation":["Yes","The Brazilian Internal Revenue Service has clarified, through rulings and Q&As, that gains from virtual assets are subject to capital gains tax, which ranges from 15% to 22.5%."],
      "capitalControls":["No","While Brazil does have a capital control regime where transactions involving cross border transfers must be conducted through an authorised intermediary, these requirements have not been extended to virtual assets."],
      "amlCft":["Proposed","Brazil's existing AML/CFT regulations have not been extended to cryptoassets, even though exchanges and other asset providers have reported suspicious transactions. <br/>The proposed law includes VASPs in the list of institutions required to report data to the Council of Financial Activities Control"],
      "grievanceRedressal":["Partial - General Legislation", "Brazil has a general consumer protection code, which will be extended to CASPs once the Bill receives Presidential assent"],
      "dataProtection":["Partial - General Legislation","CASPs will likely be data controllers under the Brazilian General dataProtection Law. However, there are no specific requirements for such entities"],
      "advertisingRegulations":["Yes","Regulation on crypto-related ads do not exist currently and have not been proposed under the new law."],
      "lat": "-14.2350",
      "lang": "-51.9253"
    },
    {
      "countryName": "Canada",
      "legalStatus": ["Legal","The use of virtual currencies for investments, payment, trading and sale is legal in Canada"],
      "classification":["Yes","Canadian Securities Administrators have provided detailed guidance on when cryptocurrencies can be classified as securities, derivatives or crypto-contracts.<br/>The Canadian Revenue Agency (CRA) generally treats cryptocurrency like a commodity for purposes of the Income Tax Act."],
      "licensing": ["Yes","Provision of trading services in relation to securities, derivatives or crypto-contracts requires a license and registration with the relevant provincial securities authority. Several exchanges have obtained registration as 'Restricted Dealers' with the CSA<br/>Exchanges that provide spot purchases and immediate delivery of crypto-assets that are not securities do not need a license. "],
      "corporateGovernance": ["Partial","Trading platforms and exchanges that offer currencies that securities, derivatives or crypto-contracts are required to fulfil minimum governance requirements as part of the registration process with the provincial securities regulator <br/>Similar requirements are not imposed on trading platforms or exchanges providing immediate spot delivery  "],
      "riskManagement": ["Partial","Trading platforms and exchanges that offer currencies that securities, derivatives or crypto-contracts are required to make disclosures and adopt risk management practices as part of the registration process with the provincial securities regulator <br/>Similar requirements are not imposed on trading platforms or exchanges providing immediate spot delivery."],
      "taxation":["Yes","The Canadian Revenue Agengy (CRA) generally treats cryptocurrency like a commodity for purposes of the Income Tax Act. Any income from transactions involving cryptocurrency is generally treated as business income or as a capital gain, depending on the circumstances. Similarly, if earnings qualify as business income or as a capital gain then any losses are treated as business losses or capital losses."],
      "capitalControls":["No","Canada does not have a capital controls regime"],
      "amlCft":["Yes","FINTRAC is the main agency overlooking AML operations in Canada under Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA). Crypto operations are considered as money services business (MSB), hence they are covered under the act."],
      "grievanceRedressal":["Partial - General Legislation", "The Financial Consumer Agency of Canada requires all regulated entities offering crypto-assets to abide by the Financial Consumer Protection Framework <br/>It is unclear if similar protections apply to offering by non-regulated entities "],
      "dataProtection":["Partial - General Legislation","While all companies must comply with PIPEDA, there are no specific information security practices prescribed for crypto exchanges"],
      "advertisingRegulations":["Yes","A number of provisions in securities legislation and IIROC rules apply to prohibit false or misleading statements in advertising or marketing materials used by crypto-trading platforms"],
      "lat": "56.1304",
      "lang": "-106.3468"
    },
    {
      "countryName": "Canada",
      "legalStatus": ["Legal","The use of virtual currencies for investments, payment, trading and sale is legal in Canada"],
      "classification":["Yes","Canadian Securities Administrators have provided detailed guidance on when cryptocurrencies can be classified as securities, derivatives or crypto-contracts.<br/>The Canadian Revenue Agency (CRA) generally treats cryptocurrency like a commodity for purposes of the Income Tax Act."],
      "licensing": ["Yes","Provision of trading services in relation to securities, derivatives or crypto-contracts requires a license and registration with the relevant provincial securities authority. Several exchanges have obtained registration as 'Restricted Dealers' with the CSA<br/>Exchanges that provide spot purchases and immediate delivery of crypto-assets that are not securities do not need a license. "],
      "corporateGovernance": ["Partial","Trading platforms and exchanges that offer currencies that securities, derivatives or crypto-contracts are required to fulfil minimum governance requirements as part of the registration process with the provincial securities regulator <br/>Similar requirements are not imposed on trading platforms or exchanges providing immediate spot delivery  "],
      "riskManagement": ["Partial","Trading platforms and exchanges that offer currencies that securities, derivatives or crypto-contracts are required to make disclosures and adopt risk management practices as part of the registration process with the provincial securities regulator <br/>Similar requirements are not imposed on trading platforms or exchanges providing immediate spot delivery."],
      "taxation":["Yes","The Canadian Revenue Agengy (CRA) generally treats cryptocurrency like a commodity for purposes of the Income Tax Act. Any income from transactions involving cryptocurrency is generally treated as business income or as a capital gain, depending on the circumstances. Similarly, if earnings qualify as business income or as a capital gain then any losses are treated as business losses or capital losses."],
      "capitalControls":["No","Canada does not have a capital controls regime"],
      "amlCft":["Yes","FINTRAC is the main agency overlooking AML operations in Canada under Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA). Crypto operations are considered as money services business (MSB), hence they are covered under the act."],
      "grievanceRedressal":["Partial - General Legislation", "The Financial Consumer Agency of Canada requires all regulated entities offering crypto-assets to abide by the Financial Consumer Protection Framework <br/>It is unclear if similar protections apply to offering by non-regulated entities "],
      "dataProtection":["Partial - General Legislation","While all companies must comply with PIPEDA, there are no specific information security practices prescribed for crypto exchanges"],
      "advertisingRegulations":["Yes","A number of provisions in securities legislation and IIROC rules apply to prohibit false or misleading statements in advertising or marketing materials used by crypto-trading platforms"],
      "lat": "56.1304",
      "lang": "-106.3468"
    },
    {
      "countryName": "China",
      "legalStatus": ["General Ban","Issuing, minting, trading and exchanging cryptocurrencies is outlawed in China. It is also illegal to offer services, such as account opening and fiat conversion, related to cryptocurrencies to Chinese residents<br/>However, the holding of cryptocurrency itself is not illegal. The private exchange of cryptocurrencies may also not be illegal.  <br/>Furthermore, providing blockchain-based information services is legal as long as they are not used to offer speculative trading on virtual currencies."],
      "classification":["No","No legal instrument specifically classifies cryptocurrencies as securities, commodities or creates a sui-generis class for their regulation. The 2014 Bitcoin circular referred to cryptocurrencies as virtual goods, but the implications of this remain unclear. Some courts have also held transfer and investment contracts using Bitcoin as valid, suggesting the cryptocurrencies may be recognised as a form of property/kind of good. "],
      "licensing": ["No","The provision of cryptocurrency exchange, issuance and storage services by enterprises is illegal. Provision of such services by domestic companies or international companies could result in imprisonment and fines for company officials based in China. <br/>Blockchain information service providers (BISPs) must file details of their offerings and services with the Cyberspace Administration of China "],
      "corporateGovernance": ["No","The provision of cryptocurrency exchange, issuance and storage services by enterprises is illegal"],
      "riskManagement": ["No","The provision of cryptocurrency exchange, issuance and storage services by enterprises is illegal."],
      "taxation":["No","As transacting using cryptocurrencies is illegal, no tax of any kind is currently applicable. However, there are calls to tax earnings from cryptocurrency despite the recent general ban."],
      "capitalControls":["No","As cross-border exchanges of cryptocurrencies are illegal in China, no crypto-specific capital controls have been implemented. However, before trading/exchanging/issuing crypto was illegal, Chinese authorities perceived it to be a key mechanism to evade capital controls."],
      "amlCft":["No","The cross-border exchange of cryptocurrencies is illegal; hence, no AML/CFT are stipulated for CASPs. However, financial institutions must comply with the PRC's  Anti-Money Laundering Law. Before providing crypto-related services was made illegal, internet companies providing such services were also required to comply with AML/CFT regulations. <br/>BISPs are required to collect real identification information, including organisations registration numbers, phone numbers etc."],
      "grievanceRedressal":["No", "There are no specific grievance redressal mechanisms related to crypto products and services."],
      "dataProtection":["No","No specific requirements for CASPs. <br/>BISPs are required to implement security management solutions as prescribed by relevant Cyber Security legislations"],
      "advertisingRegulations":["Prohibited","Advertisements related to cryptocurrencies are prohibited with frequent monitoring of key words "],
      "lat": "35.8617",
      "lang": "104.1954"
    },
    {
      "countryName": "China",
      "legalStatus": ["General Ban","Issuing, minting, trading and exchanging cryptocurrencies is outlawed in China. It is also illegal to offer services, such as account opening and fiat conversion, related to cryptocurrencies to Chinese residents<br/>However, the holding of cryptocurrency itself is not illegal. The private exchange of cryptocurrencies may also not be illegal.  <br/>Furthermore, providing blockchain-based information services is legal as long as they are not used to offer speculative trading on virtual currencies."],
      "classification":["No","No legal instrument specifically classifies cryptocurrencies as securities, commodities or creates a sui-generis class for their regulation. The 2014 Bitcoin circular referred to cryptocurrencies as virtual goods, but the implications of this remain unclear. Some courts have also held transfer and investment contracts using Bitcoin as valid, suggesting the cryptocurrencies may be recognised as a form of property/kind of good. "],
      "licensing": ["No","The provision of cryptocurrency exchange, issuance and storage services by enterprises is illegal. Provision of such services by domestic companies or international companies could result in imprisonment and fines for company officials based in China. <br/>Blockchain information service providers (BISPs) must file details of their offerings and services with the Cyberspace Administration of China "],
      "corporateGovernance": ["No","The provision of cryptocurrency exchange, issuance and storage services by enterprises is illegal"],
      "riskManagement": ["No","The provision of cryptocurrency exchange, issuance and storage services by enterprises is illegal."],
      "taxation":["No","As transacting using cryptocurrencies is illegal, no tax of any kind is currently applicable. However, there are calls to tax earnings from cryptocurrency despite the recent general ban."],
      "capitalControls":["No","As cross-border exchanges of cryptocurrencies are illegal in China, no crypto-specific capital controls have been implemented. However, before trading/exchanging/issuing crypto was illegal, Chinese authorities perceived it to be a key mechanism to evade capital controls."],
      "amlCft":["No","The cross-border exchange of cryptocurrencies is illegal; hence, no AML/CFT are stipulated for CASPs. However, financial institutions must comply with the PRC's  Anti-Money Laundering Law. Before providing crypto-related services was made illegal, internet companies providing such services were also required to comply with AML/CFT regulations. <br/>BISPs are required to collect real identification information, including organisations registration numbers, phone numbers etc."],
      "grievanceRedressal":["No", "There are no specific grievance redressal mechanisms related to crypto products and services."],
      "dataProtection":["No","No specific requirements for CASPs. <br/>BISPs are required to implement security management solutions as prescribed by relevant Cyber Security legislations"],
      "advertisingRegulations":["Yes","Advertisements related to cryptocurrencies are prohibited with frequent monitoring of key words "],
      "lat": "35.8617",
      "lang": "104.1954"
    },
    {
      "countryName": "France",
      "legalStatus": ["Legal","The PACTE Act is a legal framework for digital assets passed in 2019."],
      "classification":["Yes","Crypto-assets are classified as digital assets under the Pacte. The PACTE divides digital assets into: <br/>a. Utility Tokens <br/>b. Cryptocurrencies <br/>Stablecoins, NFTs and security tokens are not covered under this definition."],
      "licensing": ["Yes","French regulation of digital assets relies on two regimes: <br/><b>Optional visa for Initial Coin Offerings </b><br/>The French Financial Market Authority (AMF) introduced an optional visa regime for public offerings of utility tokens that are not financial instruments. This optional visa allows ICOs to market directly to French citizens whereas unregistered ICOs are subject to marketing restrictions <br/><b>Registration and licensing for Digital Asset Service Providers</b>Registration with the AMF is mandatory for the purchase and sale of digital assets in legal tender or against other digital assets, operation of a trading platform and the custody of digital assets for third parties but not for other services such as portfolio management and investment advice. Entities providing such services can also choose to obtain an optional license, which provides more avenues to reach consumers.  "],
      "corporateGovernance": ["Yes","DASPs seeking an optional license from the AMF must fulfil requirements related to commercial transaprency and prevention of conflicts of interests as per the PACTE "],
      "riskManagement": ["Yes","DASPs seeking an optional licenses must fulfil miniquity and insurance requirements that are similar to those applicable to traditional financial players."],
      "taxation":["Yes","Capital gains on digital assets that are realised as a part of individuals' private asset management are taxable at a flat rate of 30%. <br/>If trade in digital assets happens on a regular basis by professional investors, gains may be subject to the progressive income tax rate in the category of non-industrial and commercial profits.   <br/>ICOs are subject to VAT only when the issued tokens are used by their holders. "],
      "capitalControls":["No","France does not have capital controls"],
      "amlCft":["Yes","The Financial Action Task Force issued recomendations which directed virtual asset service providers to be regulated for AML/CFT purposes, and licensed or registered, and subject to effective systems for monitoring and ensuring compliance.  <br/>Yes, the FATF travel rules are applicable. Further, according to Rule 16, Virtual Asset Service Providers must obtain required originator information and required beneficiary information on virtual asset transfers, submit this information to the beneficiary VASP or other appropriate authorities."],
      "grievanceRedressal":["Yes", "The ACPR and the AMF are cooperating through a joint working group to detect instances of fraud and inform the public and professionals. The AMF also updates its blacklist of unauthorised actors. <br/>The AMF also exercises its authority to take legal action and block access to fraudulent sites."],
      "dataProtection":["Yes","The French dataProtection Law is applicable to any kind of data processing that is undertaken by an establishment of a controller or processor in French territory. This can also apply to CASPs.<br/>The AMF has released cybersecurity system requirements for digital assets service providers."],
      "advertisingRegulations":["Yes","Digital Asset Service Providers without optional licenses may not make direct solicitations or any direct or indirect advertisements. They also require AMF authorisation to recieve any sponsorship whose purpose/effect is to advertise directly/indirectly, a digital assets service."],
      "lat": "46.2276",
      "lang": "2.2137"
    },
    {
      "countryName": "Germany",
      "legalStatus": ["Legal","Crypto-assets are legal in Germany and can be used for a variety of financial purposes, including investments, transfers and payments"],
      "classification":["Yes","Crypto-assets are recognised as financial assets and are classified based on their structure and functionality. The categories of classification include securities, payment systems and investments. Depending on the classification, a range of laws including Securities Law, Banking Law and Payments law may be applicable to crypto-assets. A recent amendment to the German Banking Act added a catch-all definition of crypto-asssets meaning that such assets are regulated regardless of their classification"],
      "licensing": ["Yes","Providers of crypto-assets must generally obtain a license from the Federal Financial Supervisory Authority (BaFIN). licensing requirements also apply to providers of crypto custody services and security registers. Depending on how crypto-assets are classified, licensing requirements under securities and payments law may be also be applicable"],
      "corporateGovernance": ["Yes","As per the licensing regime, crypto-asset custofy providers and proprietary trading firms must appoint qualified and independent directors."],
      "riskManagement": ["Yes","While the license for crypto-asset custody does not seem to prescribe minimum capital requirements, where crypto-assets are classified as securities or other financial instruments, providing entities will need to comply with basic tenets of risk management and maintain minimum capital reserves"],
      "taxation":["Yes","Provision of certain services related to crypto-assets can attract VAT. <br/>Profits or gains arising from crypto-assets are also taxable. The application of income tax or capital gains will depend on the context in which profits arise"],
      "capitalControls":["No","Germany does not have capital controls"],
      "amlCft":["Yes","Germany has incorporated EU AML Directive 5 into local legislation. Hence, crypto trading platforms and wallet providers must capture and provide relevant AML information to BaFIN <br/>They must also implement robust KYC mechanisms "],
      "grievanceRedressal":["Partial - General Legislation", "There are no specific grievance redressal mechanisms that crypto-asset service providers need to put in place. However, internet patforms that offer trading or exchange service may be required to adhere to provisions in EU Consumer Protection Directives that have been accepted in Germany."],
      "dataProtection":["Yes","Licenses for crypto-custody service providers and other financial institutions require them to employ trained information security personnel, have in place a robust IT security architecture and conduct risk assessments. "],
      "advertisingRegulations":["Yes","Individuals or enterprises commercially involved with crypto-assets must avoid misleading or factually incorrect advertising "],
      "lat": "51.1657",
      "lang": "10.4515"
    },
    {
      "countryName": "India",
      "legalStatus": ["Legal","In 2018 RBI prohibited on dealing in Virtual Currencies (VCs) via a RBI notification (RBI/2017-18/154). Hon’ble Supreme Court on March 04, 2020 in the matter of Writ Petition (Civil) No.528 of 2018 (Internet and Mobile Association of India v. Reserve Bank of India) has set aside the said prohibition. Presently there is no ban on dealing in cryptoservices. "],
      "classification":["No","While cryptocurrencies are legal in India, a specific framework governing them has yet to be adopted. The Income Tax Act defines virtual digital assets and recognises cryptocurrencies and NFTs as distinct forms of NFTs."],
      "licensing": ["No","There is no specific licensing regime applicable to entities providing crypto-related services. The Companies Act requires all companies to declare their crypto holdings"],
      "corporateGovernance": ["No","No specific corporate governance requirements are prescribed for entities providing crypto-related services "],
      "riskManagement": ["No","No specific risk management requirements are prescribed for entities providing crypto-related services  "],
      "taxation":["Yes","Income Tax, Gains, and TDS.<br/>A new section 115BBH has been inserted in the Act to provide a tax of 30% on income from crypto-assets. A 1% TDS is also applicable on all crypto transactions. "],
      "capitalControls":["No","India has a managed capital account. The Reserve Bank regulates capital flows through the Foreign Exchange Management Act. Crypto-assets are yet to be brought under the Act's ambit. <br/>However, the enforcement agency for FEMA has investigated crypto-exchanges for their role in transferring funds cross border "],
      "amlCft":["No","The Reserve Bank of India prescribes AML/CFT and KYC requirements that financial institutions must follow. However, these requirements have not been extended to CASPs"],
      "grievanceRedressal":["Partial - General Legislation", "The Reserve Bank of India advises that it has not given any licence / authorisation to any entity / company to operate such schemes or deal with Bitcoin or any virtual currency. As such, any user, holder, investor, trader, etc. dealing with Virtual Currencies will be doing so at their own risk."],
      "dataProtection":["No","There are no specific data protection and information security requirements for crypto-asset service providers.  "],
      "advertisingRegulations":["Yes","The Advertising Standards Council of India (ASCI) has released the guidelines regarding crypto endorsement/advertisement. All ads for VDA products and VDA exchanges, or featuring VDAs, must carry relevant disclaimers. "],
      "lat": "20.5937",
      "lang": "78.9629"
    },
    {
      "countryName": "Indonesia",
      "legalStatus": ["Legal","<b>Legal - But only for futures trading <b/><br/>Crypto-assets cannot be used as a means for payment as per the Currency Law of 2011. However, the Ministry of Trade and Commodity Futures Trading Supervisory Agency (BAPPEBTI) recosnogise cryptoassets as commodities and allow their trading on a futures basis, subject to regulatory requirements Only cryptoassets that are approved by BAPPEBTI can be traded. It has recognoised 229 assets so far. Factors such the asset's market cap, loisting on international exchanges and AML/CFT concerns are considered before granting approval"],
      "classification":["Yes","Crypto-assets are classified as intangible commodities in digital the use cryptography and distributed ledger technology to issue new units and verify and secure transactions"],
      "licensing": ["Yes","Futures Exchanges providing crypto-asset-based contracts are required to register with the BAPPEBTI. Regulation 5/2019 specifies the minimum paid-up capital and minimum equity holding that such entities must have. <br/>Futures clearing houses crypto asset storage managers must also require approval and must comply with similar capital and equity requirements. <br/>The BAPPEBTI has currently put a moratorium on the issuance of new licenses for futures exchanges. No licenses for futures exchanges or brokers were issued before this. However, 25 agencies have received conditional approval to act as brokers.  "],
      "corporateGovernance": ["Yes","Regulation 5/2019 and 8/2021 specify that entities providing crypto futures trading must comply with minimum organisation requirements, including an audit division, legal division and accounting and finance divisions "],
      "riskManagement": ["Yes","Regulations require exchanges to maintain user funds in separate accounts. 70% of funds must also be stored offline and in cold storage"],
      "taxation":["Yes","Since crypto-assets are treated as commodities, VAT and capital gains at the rate of 0.1%"],
      "capitalControls":["No","Indonesia implements some restrictions on the flow of capital across borders. However, these have not been extended to cryptoassets"],
      "amlCft":["Yes","Crypto-assets are only approved for trading after the BAPPEBTI studies the AML/CFT risk posed by each. <br/>Regulations require brokers, exchanges and clearing houses to adopt mechanisms to check AML/CFT and implement detailed KYC procedures <br/>Exchanges also must report any suspicious transactions to the BAPPEBTI "],
      "grievanceRedressal":["Yes", "BAPPEBTI regulations prescribe a detailed greivance redressal mechanism to deal with complaints by users of exchanges. It also provides the avenues for appeal in case a complaint is not resolved at the level of the exchange "],
      "dataProtection":["Yes","The regulations require exchanges, clearing houses, brokers and storage managers to comply with various information security requirements, including: <br/>- employment of individuals with CISSP cetification <br/>- location of servers within Indonesia<br/> - Regular audits by third-parties <br/>- ISO 27001 regulations <br/>"],
      "advertisingRegulations":["No","There do not appear any specific guidelines for regulating crypto-related ads and marketing "],
      "lat": "-0.7893",
      "lang": "113.9213"
    },
    {
      "countryName": "Italy",
      "legalStatus": ["Legal","While crypto-assets are not specifically regulated, they have not been prohibited by Italian legislation. Rules for AML/CFT compliance have been enacted. "],
      "classification":["No","There is no legal classification for crypto-assets currently. However, crypto-assets may be regarded as financial instruments or products if they fulfil certain requirements under Italian securities and banking law.  <br/>Moreover, Italian courts have classified crypto-assets as financial products and 'fungible goods' in different cases. Hence, there is little clarity over the current classification of crypto-assets "],
      "licensing": ["Yes","All crypto-asset service providers and wallet providers have to notify the Italitan OAM and register their operations."],
      "corporateGovernance": ["No","There are no specific corporate governance obligations that crypto-asset service providers and wallet providers need to fulfil "],
      "riskManagement": ["No","No minimum capital or reserve requirements are prescribed for crypto-asset service providers at the moment. "],
      "taxation":["Yes","Capital gains tax and corporate tax are applicable on profits from crypto trading. Capital gains only applies if n individual's portfolio value is above 51,000 euros for seven consecutive days in a year. <br/>VAT is not applicable on crypto-trading in Italy. "],
      "capitalControls":["No","Italy does not have capital controls"],
      "amlCft":["Yes","Italy has implemented EU AMLD 5, as a result of which crypto exchanges, wallet providers and other service providers must comply with AML/CFT requirements. These include customer due diligence, record retention and transaction reporting"],
      "grievanceRedressal":["Partial - General Legislation", "The EU Omnibus Directive, which reforms consumer law and provides conumers with new avenues of recourse has been implemented in Italy. However, there are no specific obligations for crypto-exchanges and wallet providers"],
      "dataProtection":["Partial - General Legislation","The GDPR is the primary privacy legislation in Italy and may apply to crypto exchanges and wallet service providers who can be considered data controllers. However, the provisions of the Regulation have not been specifically extended to these entitites"],
      "advertisingRegulations":["No","There are no rules or guidelines regarding the advertisement and marketing of crypto products and services"],
      "lat": "41.8719",
      "lang": "12.5674"
    },
    {
      "countryName": "Italy",
      "legalStatus": ["Legal","Cryptocurrency and utility tokens such as BTC & ETH are regulated as crypto assets under the Payment Services Act (PSA). The PSA defines crypto-assets as payment methods that are not denominated in fiat currency and can be used to pay unspecified persons. There are no restrictions on owning and investing in cryptocurrencies.<br/>However, tokens that meet the requirements of a security are regulated under the Financial Instruments and Exchange Act"],
      "classification":["Yes","Crypto-assets are recognised as payment methods or securities under the PSA."],
      "licensing": ["Yes","Crypto exchanges and custodians are required to register with the Financial Services Agency (FSA). Regulations require a positive net worth, minimum capital of 10 million yen, a satisfactory organisational structure and internal systems to ensure compliance with applicable laws and regulations.  <br/>All crypto exchanges are required to be stock companies. Any foreign entity wishing to register as a crypto exchange must establish either a subsidiary or a branch in Japan. "],
      "corporateGovernance": ["No","The amended PSA does not prescribe specific corporate governance norms for CASPs. However, virtual currency exchange service providers can be ordered to improve the operation of their business "],
      "riskManagement": ["Yes","The 2017 Amendment to the PSA requires exchanges to keep the business and customer wallets separate and keep 95% of assets in cold storage (not connected to the internet).  <br/>Other risk management practices include operational risk and cyber security management, Know-Your-Customer, internal audits, and minimum capital requirements."],
      "taxation":["Yes","The gains generated by the sale or use of cryptoassets are to be treated as miscellaneous income and are taxed at rates of 15% to 55%. However, such gains cannot be offset against losses incurred elsewhere. <br/>Additionally, cryptoassets held in the estate of a deceased person are subject to inheritance tax."],
      "capitalControls":["No","Japan lifted capital controls in the 1980s"],
      "amlCft":["Yes","Crypto exchanges are subject to AML/CFT requirements under the Prevention of the Transfer of Criminal Proceeds Act and the Foreign Exchange and Foreign Trade Act respectively. These requirements include:<br/>1. KYC checks upon the opening of an account. In addition, a declaration of beneficial ownership is required in the case of corporate customers;<br/>2. Reporting suspicious transactions to the Japan Financial Intelligence Centre and the Japan Financial Intelligence Unit;<br/>3. Record production and retention requirements; and<br/>4. PEP monitoring"],
      "grievanceRedressal":["Yes", "PSA Regulations require exchanges to establish internal control systems for responding to user complaints and take measures to resolve disputes through alternative dispute resolution procedures."],
      "dataProtection":["Yes","Regulations require exchanges to take necessary measures to ensure the security of important information such as personal information and information on private keys to crypto assets; establish a risk management system to prevent system failures and cyber incidents; and establish contingency plans to deal with exigencies and provide training for the same."],
      "advertisingRegulations":["Yes","Exchanges are subject to regulations regarding advertisement and solicitation under PSA. False representations, exaggerated advertising and advertisements and solicitation that encourage speculation are prohibited. <br/>Where the sales proceeds of the cryptoassets are to be used for services or applied to the operation of a business operated by the issuer, or where the price is linked to underlying assets, investor explanations are required to include a rational explanation of the basis for the sales price."],
      "lat": "36.2048",
      "lang": "138.2529"
    },
    {
      "countryName": "Mexico",
      "legalStatus": ["Partial Ban","Mexico's FinTech law explicitly recognises cryptocurrencies as 'virtual assets, ' which differ from currencies. However, financial institutions are prohibited from using virtual assets for settlement or offering services related to virtual assets. Only non-financial institutions, i.e. ones not regulated by the Central Bank, can provide crypto-related services to users. "],
      "classification":["Yes","Cryptocurrencies are classified as virtual assets as per the FinTech Law. They are not regarded as legal tender or currency"],
      "licensing": ["No","There is no specific license for non-financial entities that provide crypto-related services. However, companies providing a facility to convert crypto into fiat must register themselves as Electronic Payment Fund Institutions and comply with provisions of the FinTech law. While financial institutions were initially permitted to use cryptocurrencies for certain services, the Central Bank has stated that crypto should be kept away from the nation's financial system. It appears that this regulation effectively limits avenues for Mexican citizens to convert fiat into crypto and vice versa "],
      "corporateGovernance": ["No","The FinTech law and related regulations do not prescribe any corporate governance norms for non-financial entities providing crypto-related services"],
      "riskManagement": ["No","The FinTech law and related regulations do not prescribe any risk management norms for non-financial entities providing crypto-related services"],
      "taxation":["No","Tax laws in Mexico have not been amended to include cryptocurrencies specifically. However, since cryptocurrencies are classified as virtual assets under the FinTech law, they may be considered as movable property. As such, individuals and companies will be required to pay capital gains on crypto earning in accordance with Mexico's Income Tax Law. The rate of tax for individuals increases progressively to 35% whereas corporations have a flat 30% tax rate. "],
      "capitalControls":["No","Mexico has no capital controls "],
      "amlCft":["Yes","Mexico amended its AML/CFT regulations as part of its modernisation of banking and financial laws. Non-financial entities that provide crypto-related services have to register with the Financial Intelligence Unit. They must also comply with KYC requirements and report all transactions above a monetary threshold to the FIU <br/>The nation complies with requirements of Rule 16 of FATF (Travel Rule)."],
      "grievanceRedressal":["Partial - General Legislation", "Non-financial institutions that provide crypto-related services are subject to the Federal Consumer Protection Law. However, there are no specific requirements for such institutions"],
      "dataProtection":["Partial - General Legislation","There are no specific regulations on data protection and information security applicable to providers of crypto-related services. However, Mexico has a general data protection law, The Federal Law on the Protection of Personal Data held by Private Parties, that may apply to CASPs."],
      "advertisingRegulations":["No","There do not appear any specific guidelines for regulating crypto-related ads and marketing "],
      "lat": "23.6260",
      "lang": "-102.5375"
    },
    {
      "countryName": "Russia",
      "legalStatus": ["Legal","Trading, mining, issuing and investing in digital financial assets is legal in Russia. However, digital financial assets cannot be used as a means of payments, as per Russian federal law."],
      "classification":["Yes","The law uses the term digital financial assets to capture tokens and cryptocurrencies. DFAs are seen as a digital right as opposed to a property or asset. Other terms, including distributed ledger and digital currencies, are also defined. "],
      "licensing": ["Yes","Federal Law lays down licensing procedures and requirements for information service providers and DFA exchanges.Only Russia legal entities are permitted to be information system operators and exchange providers. "],
      "corporateGovernance": ["Yes","Russia laws prescribe minimum qualifications and requirements for executives of information system operators and DFA exchange providers. "],
      "riskManagement": ["No","There are no specific capital reserve or risk management requirements."],
      "taxation":["Proposed","The Russian Parliament has recently approved a law that would exclude the provision of DFA-related services by information system operators and DFA exchanges from VAT. Income tax and corporate tax would apply to profits from DFA investments and trading @ 13% "],
      "capitalControls":["No","While Russia has imposed stringent capital control measures to prevent capital flight due to war sanctions, these have not been explicitly extended to DFAs. <br/>Reports suggest the use of stablecoins to evade capital controls in Russia. "],
      "amlCft":["Yes","Licensed information system operators and exchange service providers must implement AML/CFT measures, including client identification, data collection and reporting of transactions. "],
      "grievanceRedressal":["Partial - General Legislation", "Russia has a law on consumer rights protection that creates mechanisms to redress consumer disputes, including consumer associations. However, there are no specific rules for CASPs. "],
      "dataProtection":["Yes","Information systems operators must ensure the smooth and continuous operation of the system and the accuracy of records contained in the system. "],
      "advertisingRegulations":["Yes","No advertisement is permitted until a resolution on the DFA issue has been published. Any advertisement materials may not promise any profit on the DFAs or contain any projections in relation to the growth of their market value "],
      "lat": "61.5240",
      "lang": "105.3188"
    },
    {
      "countryName": "Saudia Arabia",
      "legalStatus": ["General Ban","The Saudia Arabia Monetary Authority has banned financial institutions from processing transactions involving cryptocurrencies. Government agencies have also reiterated the potential dangers of cryptocurrency and discouraged investment in them. At the same time, there is no penalty for holding cryptocurrency by retail users. Some exchanges operate in Saudia Arabia"],
      "classification":["No","Cryptocurrencies are not classified under any legislation or regulation."],
      "licensing": ["No","Financial institutions are not allowed to provide any crypto-related services. There is no licensing regime for crypto exchanges."],
      "corporateGovernance": ["No","There are no specific corporate governance requirements applicable to of crypto-related services"],
      "riskManagement": ["No","There are no specific risk management requirements applicable to crypto-related services"],
      "taxation":["No","There is no personal income tax in Saudia Arabia. "],
      "capitalControls":["No","Saudia Arabia imposes no foreign exchange restrictions"],
      "amlCft":["Yes","The provisions of Royal Decree M/21 on combating terrorism extend AML/CFT reporting and due diligence obligations to entities providing crypto-products "],
      "grievanceRedressal":["No", "There are no specific rules or regulations on consumer protection for CASPs "],
      "dataProtection":["Partial - General Legislation","Entities providing crypto-related services are not subject to any data protection or information security regulations beyond the nation's Personal Data Protection Law "],
      "advertisingRegulations":["Yes","While there are no guidelines of rules governing marketing, a Government standing 'works with relevant parties to reduce marketing for investment and trading in virtual currency'"],
      "lat": "24.774265",
      "lang": "46.738586"
    },
    {
      "countryName": "South Africa",
      "legalStatus": ["Legal","Crypto assets are treated as financial products."],
      "classification":["Yes","Crypto assets are classified as financial products. Resultantly, all crypto-asset service providers are subject to the same regulatory regime as other financial institutions under the Financial Advisory and Intermediary Services Act. "],
      "licensing": ["Yes","Any legal person who renders financial services related to crypto assets as part of regular business must obtain a license from the Financial Services Conduct Authority. This definition should include exchanges, storage providers and wallet service providers, Mining nodes and node operators are exempt from licensing requirements."],
      "corporateGovernance": ["Yes","Persons providing financial services related to crypto assets must comply with the provisions of the FAIS Act and sub-regulations, which include fit and proper tests and the management of conflict of interest "],
      "riskManagement": ["Yes","All financial service providers must establish internal risk management policies, including segregation of funds, audits and regular disclosures."],
      "taxation":["Yes","Citizens must pay income tax on profits from crypto as per standard tax rates."],
      "capitalControls":["Proposed","South Africa controls the flow of foreign exchange and assets cross border. A Government working group has recently recommended the inclusion of crypto-assets under the Exchange Control Regulations. The implementation of this recommendation would allow authorised dealers to send crypto-assets across borders provided they adhere to reporting requirements "],
      "amlCft":["Yes","Entities providing services related to crypto-assets have been included as 'Accountable Institutions' under the Financial Intelligence Centre Act and must conduct KYC and due diligence on all customers and establish a Risk Management and Compliance Program "],
      "grievanceRedressal":["Yes", "FSPs must create effective complaints management processes."],
      "dataProtection":["Partial - General Legislation","FSPs are subject to South African legislation and regulations on privacy. However, there are no specific information security or privacy requirements applicable specifically to entities providing crypto-related services. "],
      "advertisingRegulations":["Yes","FSPs must abstain from false or misleading activities in connection with their products or serivces. "],
      "lat": "-30.5595",
      "lang": "22.9375"
    },
    {
      "countryName": "South Korea",
      "legalStatus": ["Legal","Cryptocurrencies are allowed for use but are not considered legal tender in South Korea."],
      "classification":["No","There is <u>no coherent insight on how cryptocurrencies would be classified</u> under Korean law. <br/>In 2018, the Supreme Court of Korea ruled that cryptocurrencies can be confiscated as criminal proceeds. This decision represents the first time the SC has recognised cryptocurrency as <b><u>property</u></b>. There is however no clarity on the impact of this ruling on subsequent crypto regulation. "],
      "licensing": ["Yes","Under the recently revised AML Law, all crypto service providers are required to register with the Korea Financial Intelligence Unit (KoFIU). <br/>To register with KoFIU, crypto SPs must- <br/>1. Register an authorised company bank account and provide customers with their own real-name accounts with the same bank.<br/>2. Acquire an Information Security Management Systems (ISMS) certification from the Korea Internet and Security Agency (KISA)"],
      "corporateGovernance": ["No","Service providers are not subject to any specific corporate governance requirements"],
      "riskManagement": ["No","Service providers are not subject to any specific risk management obligations "],
      "taxation":["Yes","Starting in 2023, a 20% tax will be levied on cryptocurrency gains exceeding $2,100 per year. Korean citizens with foreign cryptocurrency exchange accounts may be required to report holdings and pay tax."],
      "capitalControls":["No","While South Korea controls capital flows through the Foreign Exchange Transactions Act, there is no guidance on how cryptoassets fit within this framework. <br/>In practice, banks do not process cross-border transactions that would fall foul of FETA. "],
      "amlCft":["Yes","On 5 March 2020, South Korea revised the Act on the Reporting and Use of Specific Financial Transaction Information. The amendment extends the AML/CTF rules to crypto service providers. <br/>Under the amended Act, all crypto SPs must mandatorily establish AML/KYC procedures which include customer due diligence and suspicious transactions reporting. This also requires a technical solution, which permits exchanging customers&amp; personal data with transaction counterparties."],
      "grievanceRedressal":["Partial - General Legislation", "Crypto SPs may be subject to the general consumer protection regime in South Korea even though there is no specific guidance on the subject. Reports suggest that the proposed Digital Assets Basics Act will establish strong consumer protection measures."],
      "dataProtection":["Yes","Crypto service providers must acquire an Information Security Management Systems (ISMS) certification from the Korea Internet and Security Agency (KISA)"],
      "advertisingRegulations":["No","No specific limitations or restrictions are placed on advertisements of crypto products and services. "],
      "lat": "35.9078",
      "lang": "127.7669"
    },
    {
      "countryName": "Turkey",
      "legalStatus": ["Legal","Crypto-assets are legal but cannot be used for payments, directly or indirectly."],
      "classification":["No","The Regulation on the Disuse of Crypto Assets in Payments defines crypto assets but does not adopt any classification for them. "],
      "licensing": ["No","No licensing mechanism is prescribed for companies providing services related to crypto assets. However, the issuance of tokens through ICOs may fall within the CMB's (Turkey's Markets Regulator) jurisdiction. "],
      "corporateGovernance": ["No","There are no corporate governance rules prescribed for crypto-asset service providers.  "],
      "riskManagement": ["No","There are no risk management rules prescribed for crypto-asset service providers.  "],
      "taxation":["No","No tax has been explicitly extended to crypto assets thus far. While tax liability may arise if crypto assets are considered to be securities or other financial products, there is no official guidance in this regard "],
      "capitalControls":["No","Turkey has reintroduced restrictions on foreign exchange and capital flows in the wake of its currency crisis. However, it is unclear if these limitations apply to cross border transfers involving crypto assets "],
      "amlCft":["Yes","Crypto asset service providers are considered obliged parties under Tukey's Regulation on Measures Regarding Prevention of Laundering Proceeds. Resultantly, they must conduct thorough KYC and customer due diligence, report suspicious transactions and provide information and documents when requested. "],
      "grievanceRedressal":["Partial - General Legislation", "Turkey has general consumer protection and e-commerce laws and regulations that may apply to service providers. However, there is no official communication to this effect"],
      "dataProtection":["Partial - General Legislation","General laws and regulations enacted by Turkey to protect user personal data, including the Law on The Protection of Personal Data, may apply to CASPs.   "],
      "advertisingRegulations":["No","There are no advertising guidelines for crypto products or service providers "],
      "lat": "38.9637",
      "lang": "35.2433"
    },
    {
      "countryName": "United Kingdom",
      "legalStatus": ["Legal","Crypto assets are legal in the UK. The regulatory framework applicable to them depends on how the asset is classified"],
      "classification":["Yes","The Financial Conduct Authority clarified the regulation of crypto assets through Policy Statement 19/22 in 2019. The statement classified crypto assets into: <br/>a) security tokens <br/>b) e-money tokens (including stablecoins)<br/>c) unregulated tokens <br/>This classification is meant to provide clarity on the regulatory perimeter for crypto-assets. Security and e-money tokens are within the FCA's jurisdiction whereas unregulated tokens are not "],
      "licensing": ["Yes","Crypto-asset service providers that offer security tokens or e-money tokens falls within the FCA's jurisdiction and would need the relevant permissions and authorisation. However, there is no license for CASPs dealing only with unregulated tokens. <br/>All CASPs must register with the FCA for AML/CFT purposes (covered later)"],
      "corporateGovernance": ["Partial","The FCA prescribes corporate governance for regulated firms, including regular audits, disclosures and statements. These only apply where an entity offers a product regulated by the FCA and does not apply to unregulated tokens  "],
      "riskManagement": ["Partial","CASPs that are under the FCA's jurisdiction must assess and mitigate against risks posed by crypto-assets as they would for other regulated assets. This includes putting in place relevant protection for client funds  <br/>There are no reserve or risk management requirements for CASPs outside FCA's juridiction "],
      "taxation":["Yes","Capital Gains and Income Tax on Individuals. Capital Gains Tax (CGT), Corporation Tax (CT), Corporation Tax on Chargeable Gains (CTCG), Income Tax (IT), Stamp Taxes and VAT for businesses."],
      "capitalControls":["No","The UK does not have a capital controls regime  "],
      "amlCft":["Yes","The Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017 (referred to as the new AML legislation) is applicable. The activities that come under the regulatory perimeter are Cryptoasset exchange provider, Cryptoasset ATM, Peer to Peer providers, Issuing new cryptoassets and Custodian wallet providers. The entities must undertake KYC requirements and monitor and report suspicious transactions through Suspicious Activity.  Reports."],
      "grievanceRedressal":["Partial - General Legislation", "The Consumer Rights Act 2015 and the Electronic Commerce Regulations 2022 may apply to businesses that provide services and products to consumers, including CASPs. However, there are no specific requirements for consumer protection"],
      "dataProtection":["Partial - General Legislation","CASPs may be required to comply with the General Data Protection Regulations (GDPR) "],
      "advertisingRegulations":["Yes","Ads for cryptoassets are a “red alert” priority issue for The Advertising Standards Authority (ASA) and when entities are promoting cryptocurrencies they must make it expressly clear in the ad that:<br/>1. Cryptocurrencies are unregulated in the UK.<br/>2. Cryptocurrency profits may be subject to Capital Gains Tax.<br/>3. The value of investments is variable and can go down as well as up."],
      "lat": "55.3781",
      "lang": "-3.4360"
    },
    {
      "countryName": "United States(Federal Level)",
      "legalStatus": ["Legal","The use of crypto assets for payments, investments and trading is legal in the USA."],
      "classification":["No","The US has not adopted a singular definition or classification of cryptocurrencies through legislation or regulation. While some cryptocurrencies have been classified as securities by the Judiciary, a typology for such assets has not evolved.  <br/>The Securities and Exchange Commission has also classified certain cryptoassets as securities based on the Howey Test. DAO tokens, in particular, are considered to be securities. However, there is still little clarity on which crypto assets can be considered securities. "],
      "licensing": ["Yes","All exchangers and administrators of cryptocurrency must register as a Money Service Business with the FinCen under the Banking Secrecy Act. They must also obtain licenses for each State they wish to operate in. MSBs must implement mechanisms to counter AML/CFT threats and report transactions to FinCen. <br/>If exchanges or service providers list assets considered securities, registration as an online digital asset exchange may be required. "],
      "corporateGovernance": ["Partial","The FCA prescribes corporate governance for regulated firms, including regular audits, disclosures and statements. These only apply where an entity offers a product regulated by the FCA and does not apply to unregulated tokens  "],
      "riskManagement": ["Yes","There are no specific risk management procedures of practices for companies providing crypto services. Where crypto assets offered by the company are services, SEC rules in this regard may apply.  "],
      "taxation":["Yes","'Virtual currency' is treated as property for tax purposes and income tax and capital gains for property apply to such assets."],
      "capitalControls":["No","The US does not have a capital controls regime.  "],
      "amlCft":["Yes","FinCen exercises oversight over crypto exchanges and administrators for AML/CFT purposes. Exchanges and administrators must register with FinCen and set up mechanisms for verifying customer identity and reporting suspicious transactions. "],
      "grievanceRedressal":["No", "While the Federal Trade Commission and Consumer Financial Protection Board are empowered to protect consumers against unfair and deceptive acts, neither has taken decisive action against CASPs thus far. No regulations or guidelines on this subject have been issued "],
      "dataProtection":["No","There are no specific privacy or information security obligations for CASPs. The FTC is currently investigating data breaches at leading exchanges in 2022 "],
      "advertisingRegulations":["No","Regulations or guidelines limiting or restricting the advertising of crypto products and services have not been passed so far. However, the SEC has sued celebrities for their role in promoting tokens that were actually securities. The FTC is also investigating advertising practises by leading exchanges. "],
      "lat": "37.0902",
      "lang": "-95.7129"
    },
    {
      "countryName": "European Union",
      "legalStatus": ["Legal",""],
      "classification":["Proposed",""],
      "licensing": ["Proposed",""],
      "corporateGovernance": ["Proposed",""],
      "riskManagement": ["Proposed",""],
      "taxation":["Yes",""],
      "capitalControls":["No",""],
      "amlCft":["Yes",""],
      "grievanceRedressal":["Proposed", ""],
      "dataProtection":["Partial - General Legislation",""],
      "advertisingRegulations":["Proposed",""],
      "lat": "50.5039",
      "lang": "4.4699"
    }

    
    
 ];


 

  
  var markers = [];

    function updateMarkers(selectedValue) {
      removeMarkers();
      displayLegend(selectedValue);
      console.log(selectedValue);
      for (let i = 0; i < countryData.length; i++) {
        var icon;
        if (
          countryData[i][selectedValue][0] == "Legal" ||
          countryData[i][selectedValue][0] == "Yes"
        ) {
          icon = greenIcon;
  
        } else if (
          countryData[i][selectedValue][0] == "Partial Ban" ||
          countryData[i][selectedValue][0] == "Partial" ||  countryData[i][selectedValue][0] == "Partial - General Legislation" )
      {
          icon = orangeIcon
        } else if (
          countryData[i][selectedValue][0] == "No" ||
          countryData[i][selectedValue][0] == "General Ban" ||
          countryData[i][selectedValue][0] == "Prohibited" 
        ) {
            icon = redIcon
        } else if (countryData[i][selectedValue] == "Proposed") {
          icon = yellowIcon
        }
        markers.push(
            L.marker([countryData[i].lat, countryData[i].lang], {
              icon: icon,
            })
              .addTo(map)
              .bindTooltip(`${countryData[i].countryName}`)
              .on("click", function () {
                openPopup(countryData[i]);
              })
          );
      }
    }

  // Remove Markers Function
  function removeMarkers() {
    for (let i = 0; i < markers.length; i++) {
      map.removeLayer(markers[i]);
    }
  }


  