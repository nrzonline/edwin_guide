# # [Lees of bewerk deze guide op GitHub](https://github.com/nrzonline/edwin_project)
---
    #                                                               #
    ################### INSTALLATIE BENODIGDHEDEN ###################
    #                                                               #
###### Alvorens we kunnen gaan beginnen met het ontwikkelen van een web-applicatie, gaan we
###### een hoop programma's, packages en tools installeren. In het volgende hoofdstuk gaan
###### gaan we een project opzetten en de tools en packages in gebruik nemen. Succes!
---

# CMDer
Terminal emulator voor windows met een goede uitstraling en een goede gebruiksvriendelijkheid.

[Homepage](http://cmder.net/) - [Download](http://cmder.net/) - [Documentatie](https://conemu.github.io/)

## Installatie
* **Windows 7**:
  1. Download de full versie van CMDer. [(Downloads pagina)](http://cmder.net/)
  1. Pak de `.zip` file uit op een logische plek.
  1. Start CMDer (Administrator rechten nodig)

## Keyboard shortcuts basics
Application | Keyboard | Action | Extra
--- | --- | --- | ---
CMDer | `CTRL` + **`** | Open en sluit CMD terminal | -
CMDer | `ALT` + `ENTER` | Full Screen modus | -
CMDer | `CTRL` + `T` | Open nieuwe tab | +tab settings
CMDer | `WIN` + `ALT` + `P` | Open de settings | -

---
# **Atom**
Atom is een moderne, gebruiksvriendelijke, en volledig aanpasbare editor.

**Features**: Crossplatform, Packagem manager, Auto-complete, Split screen, Plugin manager, Markdown Preview, Ondersteund grote bestanden

[Homepage](http://atom.io/) - [Download](http://atom.io/) - [Documentatie](https://atom.io/docs/)

### Installatie
* **Windows 7**:
  1. Download Atom via de website, en run de AtomSetup.exe file.. That's all! [(Downloads pagina)](https://atom.io/)
* **Linux**:
  1. Voeg de atom repository toe, type `sudo add-apt-repository ppa:webupd8team/atom`
  1. Update je apt-get repositories door `sudo apt-get update` te typen.
  1. Installeer atom door `sudo apt-get install atom` te typen.

### Installeer Telemos Software Packages & Settings
1. Druk op `CRTL` + `SHIFT` + `P`.
1. Type `install packages` en klik op '*Settings views: Install Packages en Themes*'.
1. Installeer de volgende package via de package-installer:  **sync-settings** van *Hackafe*.
1. Druk op `CRTL` + `SHIFT` + `P`.
1. Type `install packages` en klik op '*Settings views: View Installed Packages*'.
1. Klik op the *sync-settings* package.
1. Plaats `2f88df8e23e88024814f` bij de Gist Id in de setting.
1. Plaats `a7379fbe38844f71aa935e93b07905d39e28098e` bij de Personal Access Token in de setting.
1. Restart Atom.
1. Klik op 'restore' in het dialoog rechtsboven.
1. Wacht max. 15 min.
1. De volgende packages zijn geinstalleerd:
    - **merge-conflicts** van *smashwilson*
    - **color-picker** van *thomaslindstrom*
    - **file-icons** van *DanBrooker*
    - **autoclose-html** van *mattberkowitz*
    - **language-python** van *atom*
    - **autocomplete-python** van *sadovnychyi*
    - **atom-django** van *zacharytamas*
    - **django-templates** van *benjohnson*
    - **python-tools** van *MichaelAquilina*
    - **atom-python-debugger** van *fdxgear*
    - **linter-pep8** van *AtomLinter*
    - **git-plus** van *akonwi*
    - **minimap** van *atom-minimap*
    - **atom-material-ui** van *silvestreh* (theme)
    - **gruvbox** van *calab* (theme)
    - **pigments** van *abe33*
1. Is de externe configuratie succesvol geïnstalleerd? Dan kun je de *sync-settings* in je instellingen uitzetten.
1. Daarnaast kun je nog een aantal handige plug-ins overwegen:
    - **highlight-selected** van *richrace*
    - **minimap-highlight-selected** van *atom-minimap*
    - **pain-split** van *vidius*
    - **tool-bar** van *JustCrow*
    - **markdown-scroll-sync** van *mark-hahn*
	- **linter-flake8** van *atom-linter*
    - **script** van *rgbkrk*
    - **line-ending-converter** van *williampuk*

### Keyboard shortcuts basics
Application | Keyboard | Action | Extra
--- | --- | --- | ---
atom | `CTRL` + `P` | Search file | Je kan zoeken met termen
atom | `CRTL` + `SHIFT` + `P` | Command Popup | Voor o.a. package control
atom | `CTRL` + `\` | Toon de bestanden-boom | -
atom | `CTRL` + `SHIFT` + `M` | Preview Markdown | Voor .md bestanden, het scrijven van documentatie

---
# **Chrome**
---

Google Chrome is een eenvoudige, snelle en veilige webbrowser, speciaal ontwikkeld voor het moderne internet.

**Features**: Goede weergave, LiveReload plugin werkt goed, goede debug weergave.

[Homepage](https://www.google.nl/chrome/browser/desktop/) - [Download](https://www.google.nl/chrome/browser/desktop/)

### Installatie
* **Windows 7**:
    1. Download de windows versie van Chrome. [(Downloads pagina)](https://www.google.nl/chrome/browser/desktop/)
    1. Run de installatie wizzard, en importeer eventueel je gegevens uit je FireFix of Internet Explorer omgeving. Done!
* **Linux**:
    1. Download de linux versie van chrome. [(Downloads pagina)](https://www.google.com/chrome/browser/desktop/)
    1. Open het `google-chrome-stable_current_amd64.deb` bestand met de Debian Package Installer.
    1. Je chrome wordt nu geïnstalleerd. Klaar!

### Plug-ins configureren
1. Ga naar `instellingen` -> `extensies`.
1. Klik onderaan op `meer extensies toevoegen`.
1. Zoek en installeer de volgende extensies, en restart uiteindelijk de browser.
    - **Django Debug Panel**
    - **DHC - Rest/HTTP API Client**
    - **LiveReload**
    - **Window Resizer**
    - **ColorZilla**

---
# **Vagrant**
---

Creëer een virtuele omgeving zoals Linux in je huidige windows omgeving.

[Homepage](https://www.vagrantup.com/) - [Download](https://www.vagrantup.com/docs/) - [Documentatie](https://www.vagrantup.com/downloads.html)

### Installatie
* **Windows 7**:
  1. Download de windows versie van vagrant. [(Downloads pagina)](https://www.vagrantup.com/downloads.html)
  1. Run het vagrant_x.x.x.msi bestand en volg de installatie wizzard ( +reboot! ), en klaar!
* **Linux**:
    1. Download de debian versie van vagrant. [(Downloads pagina)](https://www.vagrantup.com/downloads.html)
    1. Open het `vagrant_1.9.x_x86_64.deb` bestand met de Debian Package Installer.
    1. Je vagrant wordt nu geïnstalleerd, en de paden worden automatisch goed gezet. Klaar!

### Gebruik
* **Windows 7**:
    1. Via CMDer navigeer je naar je projecten-map. Bv: `cd c:/user/projects/`
    1. Maak een nieuwe map voor je nieuwe vagrant project. Bv: `mkdir tutorial`
    1. Ga naar je nieuwe project-map. Bv: `cd tutorial`
    1. Type `vagrant init`, en een nieuw `Vagrantfile` zal worden gemaakt.
    1. Type `notepad Vagrantfile` en vervang de code met de **#code-snippet-vagrant-config** (save!).
    1. Type `vagrant up`, en een nieuwe je virtuele Ubuntu omgeving zal gebouwd worden.
      - Vagrantbox zal de eerste keer gedownload en geïnstalleerd worden. Hij download dan het bestand `VirtualBox-x.x.x-xxxxxxx-MultiArch_xxx.msi` in je projectfolder. Als het systeem voldoende rechten heeft, gaat de installatie vanzelf. Mocht het niet vanzelf gaan, moet je het bestand zelf even openen en installeren door de wizzard te volgen. Na installatie kan je de gedownloade `.msi` bestanden verwijderen.
    1. Klaar? Type `vagrant ssh` en voer **vagrant** als wachtwoord in.
    1. Welkom, je zit in je Ubuntu virtuele omgeving! Have fun!

* **Linux**:
    1. Navigeer via je Terminal naar je projecten-map. Bv: `cd /home/user/projects/`
    1. Maak een nieuwe map voor je vagrant project. Bv: `mkdir tutorial`
    1. Navigeer naar je nieuwe project-map. Bv: `cd tutorial`
    1. Type `vagrant init`, en een nieuw `Vagrantfile` zal worden gemaakt.
    1. Als je atom hebt geïnstalleerd `atom Vagrantfile` en vervang de code met de **#code-snippet-vagrant-config**, en zet `:nfs => true` op **false** (save!).
    1. Type `vagrant up`, en een nieuwe je virtuele Ubuntu omgeving zal gebouwd worden
    1. Klaar? Type `vagrant ssh` en voer **vagrant** als wachtwoord in.
    1. Welkom, je zit in je Ubuntu virtuele omgeving! Have fun!

#### #code-snippet-vagrant-config
```
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder '.', '/home/vagrant', :nfs => true
  config.vm.network :forwarded_port, host: 8000, guest: 8000
  config.vm.network :forwarded_port, host: 5432, guest: 5432

  config.vm.provider "virtualbox" do |vb|
  vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
  vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  vb.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
  vb.customize ["modifyvm", :id, "--memory", "2048"]
  vb.customize ["modifyvm", :id, "--cpus", 1]
  end
end
```

## **Meer informatie:**
* Wil je meer weten over de basics van Linux, aantal commands of gebruik maken van de Ubuntu GUI?
Lees dan meer hier over onder het kopje **LINUX BASICS**!
* Wil je meer weten over het vollediger configureren van een vagrant-django omgeving?
Lees dan meer hier over onder het kopje **VAGRANT-DJANGO OMGEVING**

## **Troubleshooting:**
* Maak eventueel gebruik van de VirtualBox Manager (applicatie) om meer inzicht te krijgen vanzelf
  je (mogelijke) instellingen en draaiende virtuele omgevingen.
* Via de VirtualBox Manager kun je op de knop `TONEN` drukken. Dit zal de huidige desktop
  van de virtuele omgeving tonen (Ubuntu 14.04), en hier kun je eventueel ook de error-popups
  bekijken.
* Bij problemen met vagrant kan windows-firewall regelmatig een rol spelen!
* Zoek een goed balans in wat je beschikbaar stelt van je hardware voor je virtual machine.
  Gebruikt je virtual machine teveel van je beschikbare capaciteiten, zul je geheid problemen krijgen
  (Deze problemen kunnen zich al voordoen tijdens het builden van je virtuele omgeving)


### Commands basics
Application | Command | Action | Extra
--- | --- | --- | ---
vagrant | `vagrant init` | Initialiseert vagrant in je project | Configuratie zit in je `Vagrantfile`
vagrant | `vagrant up` | Vagrant omgeving opzetten | -
vagrant | `vagrant ssh` | Werken in je Vagrant omgeving | Wachtwoord: vagrant
vagrant | `exit` | Verlaat de virtuele omgeving | -
vagrant | `vagrant halt` | Stop de huidige vagrant 'service' | -
vagrant | `vagrant reload` | Herlaad Vagrantfile configuratie | -
vagrant | `vagrant destroy` | Vernietig huidige Vagrant build  | -

---
# **GIT**
---

Met behulp van GIT kan je makkelijk je versies beheren, code sharen en vergemakkelijkt het samenwerken in een team.

**Features**: Eenvoudig, Makkelijk te leren, Versie beherend, Makkelijk bereikbare code, Gratis, Open Source

[Homepage](https://git-scm.com/) - [Download](https://git-scm.com/downloads) - [Documentatie](https://virtualenv.readthedocs.org/en/latest/userguide.html) - [GitHub](https://github.com/)

### Installatie
* **Windows 7**:
    1. Download de laatste versie van GIT.[(Downloads pagina)](https://git-scm.com/download/win)
    1. Run de git-x.x.x-xx-bit.exe installer, en selecteer de volgende opties:
        * [x]Use git from the Windows Command Prompt
        * [x]Checkout as-is, commit Unix-style line endings
        * [x]Use MinTTY (the default terminal of MSys2)
        * [x]Enable file system caching
* **Linux**:
    1. Update je apt-get repositories door `sudo apt-get update` te typen, als je dit nog niet hebt gedaan.
    1. Installeer *git* door `sudo apt-get install git-all` te typen.
    1. Run de installer, en volg de stapen.

### Commands basics
Application | Command | Action | Extra
--- | --- | --- | ---
git | `git add <file/dir>` | Voeg een bestand of folder aan de tracklist toe | -
git | `git remove <file/dir>` | Verwijder een bestand of folder van de tracklist | Voor folders voeg dan `-r` toe
git | `git status` | Toon de globale veranderingen sinds vorige commit | -
git | `git diff` | Toon de source veranderingen sinds vorige commit | -
git | `git commit` | Commit een changeset naar je locale repository | -
git | `git remote add <name> <url>` | Voeg een externe repository toe | -
git | `git push <remote>` | Clone een repository naar een lokale locatie | -
git | `git pull <remote>` | Pull de veranderingen van de Remote Repository | -
git | `git clone` | Clone een repository naar een lokale locatie | -
git | `git status` | Toon de globale veranderingen in je repository | -

---
# **NodeJS / npm**
---

JavaScript framework voor webdevelopment en de packagemanager voor JavaScript

[Homepage](https://nodejs.org/en/) - [Download](https://nodejs.org/en/download/) - [Documentatie](https://nodejs.org/en/docs/)

### Installatie
Het is belangrijk dat je NodeJS op je systeem installeert, en niet in je virtuele omgeving.

* **Windows 7**:
    1. Download NodeJS (node-vx.x.x-xxx.msi) van de NodeJS website [(downloads pagina)](https://nodejs.org/en/download/)
    1. Run de install wizard en zorg dat je **npm** (Node Package Manager) ook mee installeerd.
    1. Start je CMDer en type `node -v` en vervolgens `npm -v`. Krijg je versies te zien? It works!
* **Linux**:
    1. Update je apt-get repositories door `sudo apt-get update` te typen, als je dit nog niet hebt gedaan.
    1. Installeer *nodejs* door `sudo apt-get install nodejs` te typen.
    1. Installeer *npm* (node package manager) door `sudo apt-get install npm` te typen.

---
# **Gulp.js**
---

[Homepage](http://gulpjs.com) - [Documentatie](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Installatie
Voor de installatie van GulpJS dient `NodeJS` en `npm` te zijn geïnstalleerd. Voor meer informatie over hierover kun je vinden
in het kopje **NodeJS / npm**.

* **Windows 7**:
    1. In je CMDer, type `npm install -g gulp` om gulp lokaal te installeren (`-g` staat voor global)
    1. Per project dien je `npm install gulp` uit te voeren, om GulpJS in je project te installeren.
    1. Gulp dient ook per project te worden geïnstalleerd in het betreffende project-map! Hier komen we op terug.

---
# **Bower**
---

[Homepage](http://bower.io/) - [Documentatie](http://bower.io/)

### Installatie
Voor de installatie van Bower dient `NodeJS` en `npm` te zijn geïnstalleerd. Voor meer informatie over hierover kun je vinden
in het kopje **NodeJS / npm**. Bower wordt lokaal geïnstalleerd, en niet in je virtuele omgeving.

* **Windows 7**:
    1. In je CMDer, type `npm install -g bower` om Bower lokaal te installeren (`-g` staat voor global)
    1. Type `bower --version`, krijg je een versie te zien? Done!

---
# **Virtual Environment**
---

Virtual environment, een map waarin packages worden geïnstalleerd.

[Homepage](https://virtualenv.readthedocs.org/en/latest/) - [Download](https://pypi.python.org/pypi/virtualenv) - [Documentatie](https://virtualenv.readthedocs.org/en/latest/userguide.html)

### Installatie
Virtual environment dient gebruikt te worden onder Linux. Windows gebruikers zullen dus gebruik moeten maken van
hun Vagrant omgeving. Virtual Environment wordt lokaal in Unix geïnstalleerd (sudo).

* **Windows (Vagrant/Linux)**:
    1. Update je apt-get repositories door `sudo apt-get update` te typen, als je dit nog niet hebt gedaan.
    1. Installeer *virtualenv* door `sudo apt-get install python-virtualenv`
    1. Type `virtualenv --version`, krijg je een versie te zien? It works!

### Gebruik
* **Windows (Vagrant/Linux)**:
    1. Creëer je nieuwe virtual environment door `virtualenv venv_tutorial` te typen.
    1. Navigeer naar je vagrant directory door `cd ~` te typen.
    1. Chown je virtual environment map door `sudo chown vagrant:vagrant tutorial/ -R` te typen.
    1. Activeer je virtual environment door `source venv_tutorial/bin/activate` te typen.
* **Linux**:
    1. Write?!

---
# **PIP Installer (Python Install Python)**
---

Python package installer en manager.

[Homepage]https://pip.pypa.io/en/stable/) - [Documentatie](https://pip.pypa.io/en/stable/reference/)

### Installatie
* **Windows (Vagrant/Linux)**:
    1. Update je apt-get repositories door `sudo apt-get update` te typen, als je dit nog niet hebt gedaan.
    1. Installeer PIP door `sudo apt-get install python-pip` te typen.
    1. Type `pip --version`, krijg je een versie te zien? Done!

---
# **Python & Django Framework**
---

High-end python webframework.

**Features**: Clean code, Testable, Veel build-ins, Flexibel, Veel packages beschikbaar

[Homepage](https://www.djangoproject.com/) - [Download](https://www.djangoproject.com/download/) - [Documentatie](https://docs.djangoproject.com/en/1.9/)

### Installatie
* **Windows (Vagrang/Linux)**:
    1. Zorg dat je in je virtual environment zit, zie kopje **Virtual Environment** voor meer informatie.
    1. Type `pip install django` om de laatste versie van Django te installeren (Python included).
    1. Type `python --version` en `django-admin --version`, krijg je versies te zien? Done!
* **Linux**:
    1. Type `pip install django` om de laatste versie van Django te installeren (Python included).
    1. Type `python --version` en `django-admin --version`, krijg je versies te zien? Done!

### Commands basics
Application | Command | Action | Extra
--- | --- | --- | ---
django | `django-admin startproject` | Start een nieuw project | -
django | `django-admin startapp` | Start een nieuwe app in een project | -
django | `django-admin createsuperuser` | Creëer een nieuwe superuser | -


Application | Keyboard | Action | Extra
--- | --- | --- | ---
python | `python manage.py runserver` | Draai de testserver | in vagrant `runserver 0.0.0.0:<poort>`
python | `python manage.py makemigrations` | Bouw de database migraties | -
python | `python manage.py migrate` | Voer de database migraties uit op het database | -

---
    #                                                                      #
    ################### PROJECT OPZETTEN EN CONFIGUREREN ###################
    #                                                                      #
###### De installaties zijn completeet, en je bent klaar om een project te gaan opzetten!
###### In dit hoofdstuk ga je een Python / Django project maken, en de tools op de juiste
###### manier gebruiken. Na dit hoofdstuk heb je een goede basis project om in te ontwikkelen.
###### De punten met `(optioneel)` zijn optioneel, maar wel aan te raden.
---

---
# **Een nieuw Django project starten**
---
### Voorbereiding (Windows Vagrant/Linux)
1. Zorg dat je in ubuntu werkt, of in een virtuele ubuntu omgeving (Vagrant), zie **Vagrant** voor meer informatie.
1. Zorg dat je virtualenv geactiveerd is, zie **Virtual Environment** voor meer informatie.
1. Navigeer naar je Vagrant map door `cd ~` te typen.
1. Start een nieuw Django project door `django-admin startproject tutorial_project` te typen.
1. Navigeer naar je nieuwe Django Projectmap door `cd tutorial_project` te typen.

1. Voer de database migraties uit door `python manage.py migrate` te typen. Een database zal aangemaakt worden (`db.slqite3`)
1. Nu een database aagemaakt is, kunnen we een superuser maken. Type `python manage.py createsuperuser`
1. Je kunt nu een testserver starten, en kijken of het project werkt. Type `python manage.py runserver 0.0.0.0:8000`
1. Als de server draait, browse je naar [http://localhost:8000/](http://localhost:8000/), zie je "It worked!"? Well done!

---
# **GIT initiatiseren voor je nieuwe project (Windows Vagrant/Linux)**
---
1. Druk in je CMDer op `CTRL` + `T`, en start een nieuwe `{cmd}` tab. Je hebt nu weer een **WINDOWS** tab in je CMDer
1. Navigeer in CMDer naar je Django project map door bijvoorbeeld `cd C:/users/projects/tutorial/tutorial_project/` te typen.
1. Type `git init`, en een hidden .git map zal aangemaakt worden.
1. Ga terug naar je Vagrant omgeving door op je vorige tab te drukken.
1. Navigeer naar je Django projectmap door `cd ~/tutorial_project/` te typen.
1. Creëer een `.gitignore` bestand door `touch .gitignore` te typen.
1. Open dit bestand in een editor, en voeg **#code-snippet-gitignore** hier aan toe. (save & exit)
1. In je **WINDOWS** CMDer tab, type `git add .` om de nieuwe bestanden en mappen aan de tracklist van git toe te voegen.
1. Nu gaan we een initiele commit maken van onze aanpassingen, door `git commit -m "Initial project commit with .gitignore"` te typen.

#### #code-snippet-gitignore
```
*.pyc
*.orig
.fuse_hidden*

.git
__pycache__
.vagrant
node_modules
static/vendor

db.sqlite3
```

* **GitHub repository gebruiken**:
    1. Maak een GitHub account aan, en activeer deze. [(Registreer op GitHub)](https://github.com/join)
    1. Maak een GitHub repository aan voor het project. [(New GitHub Repository)](https://github.com/new)
    1. Maak een Remote Repository aan in je git, type `git remote add <naam> https://github.com/<gebruikersnaam>/<reponaam>.git`
    1. Push naar je Remote Repository, type `git push -u <naam> master`
    1. Navigeer in je browser naar `https://github.com/<gebruikersnaam>/<reponaam>`, en kijk of je project er op staat? Ja? Nice!

---
# **JavaScript package installeren met Bower**
---
* **Windows (Vagrant/Linux)**:
    1. Navigeer naar je Django project door `cd ~/tutorial_project` te typen.
    1. Maak een bower configuratie bestand aan door `touch .bowerrc` te typen.
    1. Open `.bowerrc` in een editor, en voeg de snippet **#snippet-bowerrc-config** er aan toe. (save & exit)
    1. Maak een bestand aan genaamd `bower.json`, door `touch bower.json` te typen.
    1. Open het bestand in een editor, en voeg de snippet **#snippet-bower-package** er aan toe. (save & exit)
    1. Navigeer in je Windows CMDer tab naar je Django project map, bijvoorbeeld `cd c:/users/projects/tutorial/tutorial_project/`
    1. Om de benodigde bower dependencies te installeern, type je `bower install` en de packages worden geïnstalleerd. Done!

#### #snippet-bowerrc-config
```
{
  "directory": "static/vendor"
}
```

#### #snippet-bower-package
```
{
  "name": "timeline",
  "version": "0.0.0",
  "authors": [
    "Edwin ter H."
  ],
  "description": "new project dependencies",
  "license": "MIT",
  "dependencies": {
    "jquery": "latest",
    "bootstrap": "latest",
    "angular": "latest",
    "angular-route": "latest"
  }
}
```

---
# **Node Packages installeren met npm**
---
Om een aantal zaken mogelijk te maken, zoals LiveReload, compilen van preprocessors zoals Sass en LESS en het
omzetten van CoffeeScript naar JavaScript hebben we Gulp nodig. Alvorens deze benodigde packages te installeren
heb je **NodeJS**, **npm** en **Gulp** te hebben geïnstalleerd op je computer. Zie de betreffende koppen voor
meer informatie. Je dient in je Linux omgeving te werken (Windows gebruikers in Vagrant).

**CMDer dient als !! ADMINISTRATOR !! te worden gestart alvorens je de NPM packages kunt installeren.**

1. Navigeer naar je Django project door `cd ~/tutorial_project` te typen.
1. Maak een package.json bestand aan door `touch package.json` te typen.
1. Open `package.json` in een editor, en voeg de **#snippet-package-npm** toe. (save & exit)
1. Maak een bestand gulpfile.js bestand aan door `touch gulpfile.js`te typen.
1. Open `gulpfile.js` in een editor, en voeg [deze JavaScript code](https://github.com/nrzonline/edwin_project/blob/master/gulpfile.js) toe aan het bestand. (save & exit)
1. Navigeer in je Windows CMDer tab naar je Django project map, bijvoorbeeld `cd c:/users/projects/tutorial/tutorial_project/`
1. Voer de npm installatie van de packages uit door `npm install` te typen, de packages worden geïnstalleerd. Done!

#### #snippet-package-npm
```
{
    "name": "timeline-gulp",
    "version": "0.0.0",
    "description": "List of Gulp dependencies.",
    "author": "Sem V.",
    "dependencies": {
        "gulp": "*",
        "gulp-coffee": "*",
        "gulp-minify-css": "*",
        "gulp-haml": "*",
        "gulp-minify-html": "*",
        "gulp-livereload": "*",
        "gulp-notify": "*",
        "gulp-newer": "*",
        "gulp-plumber": "*",
        "gulp-ruby-sass": "*",
        "gulp-sass": "*"
    },
    "main": "gulpfile.js"
}
```

---
# **Python Packages installeren met pip**
---

Om de geadviseerde opzet te realiseren, heb je een aantal Python / Django packages nodig. Deze gaan we eenvoudig
installeren met de pip installer met behulp van een requirements.txt bestand. Je dient in je linux omgeving te werken
(Windows gebruikers in Vagrant).

1. Navigeer naar je Django project door `cd ~/tutorial_project` te typen.
1. Maak een requirements.txt bestand aan door `touch requirements` te typen.
1. Open `requirements.txt` in een editor, en voeg de **#snippet-requirements-pip** toe. (save & exit)
1. Type pip install -r requirements.txt om de dependencies te installeren middels pip.

#### #snippet-package-npm
```
django-admin-bootstrapped==2.5.6
django-bootstrap3==6.2.2
django-bower==5.0.4
django-crispy-forms==1.6.0
django-debug-toolbar==1.4
django-livereload==1.5
djangorestframework==3.3.0
httpie==0.9.3
```

---
# **(Optioneel) Django Debug Toolbar**
---

[Homepage](https://django-debug-toolbar.readthedocs.org/en/1.4/) - [Download](https://django-debug-toolbar.readthedocs.org/en/1.4/installation.html) - [Documentatie](https://django-debug-toolbar.readthedocs.org/en/1.4/)

Met behulp van Django Debug Toolbar kan je een hoop debug-informatie verkrijgen, die het debuggen van je project vergemakkelijken.

### Installeren / Activeren (Windows Vagrant/Linux)
1. Zorg dat je in je Linux omgeving werkt, zie het kopje **Vagrant** voor meer informatie.
1. Zorg dat je virtual environment is geactiveerd. Zie het kopje **Virtual Environment** voor meer informatie.
1. Type `pip freeze` en kijk of `django-debug-toolbar==x.x.x` is geïnstalleerd.
1. Is het nog niet geïntalleerd? Type dan `pip install django-debug-toolbar` om deze te installeren.
1. Navigeer naar je project configuratie map, bijvoorbeeld `cd ~/tutorial_project/tutorial_project`
1. Open het bestand `settings.py` met een editor.
1. Voeg `debug_toolbar` aan je `INSTALLED_APPS` toe (save & exit).

---
# **(Optioneel) Django Admin Bootstrapped**
---

[Homepage](http://django-admin-bootstrapped3.readthedocs.org/en/latest/) - [Download](http://django-admin-bootstrapped3.readthedocs.org/en/latest/#installation) - [Documentatie](http://django-admin-bootstrapped3.readthedocs.org/en/latest/#)

### Installeren / Activeren (Windows Vagrant/Linux)
1. Zorg dat je in je Linux omgeving werkt, zie het kopje **Vagrant** voor meer informatie.
1. Zorg dat je virtual environment is geactiveerd. Zie het kopje **Virtual Environment** voor meer informatie.
1. Type `pip freeze` en kijk of `django-admin-bootstrapped==x.x.x` is geïnstalleerd.
1. Is het nog niet geïntalleerd? Type dan `pip install django-admin-bootstrapped` om deze te installeren.
1. Navigeer naar je project configuratie map, bijvoorbeeld `cd ~/tutorial_project/tutorial_project`
1. Open het bestand `settings.py` met een editor.
1. Voeg `django_admin_bootstrapped` aan je `INSTALLED_APPS` toe vóór `django.contrib.admin`!
1. Voeg de volgende regel aan code ook toe aan je `settings.py` file (Maakt niet uit waar, zolang het niet in een LIST is!) (save & exit)
```
DAB_FIELD_RENDERER = 'django_admin_bootstrapped.renderers.BootstrapFieldRenderer'
```

---
# **Django Rest Framework**
---

Django-Rest-Framework bied de mogelijkheid om gemakkelijk en snel Web API's te schrijven.

[Homepage](http://www.django-rest-framework.org/) - [Download](http://www.django-rest-framework.org/#installation) - [Documentatie](http://www.django-rest-framework.org/)

### Installeren / Activeren (Windows Vagrant/Linux)
1. Zorg dat je in je Linux omgeving werkt, zie het kopje **Vagrant** voor meer informatie.
1. Zorg dat je virtual environment is geactiveerd. Zie het kopje **Virtual Environment** voor meer informatie.
1. Type `pip freeze` en kijk of `django-rest-framework==x.x.x` is geïnstalleerd.
1. Is het nog niet geïntalleerd? Type dan `pip install django-rest-framework` om deze te installeren.
1. Navigeer naar je project configuratie map, bijvoorbeeld `cd ~/tutorial_project/tutorial_project`
1. Open het bestand `settings.py` met een editor.
1. Voeg `rest_framework` aan je `INSTALLED_APPS` toe.
1. Voeg de volgende regel aan code ook toe aan je `settings.py` file (Maakt niet uit waar, zolang het niet in een LIST is!) (save & exit)
1. Open het bestand `urls.py` met een editor.
7. Voeg de onderstaande url-pattern toe aan de huidige url-patterns:
```
url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
```

---
# **(Optioneel) Django Crispy Forms**
---

Het snel genereren van formulieren in boostrap3 met Django Crispy Forms.

[Homepage](http://django-crispy-forms.readthedocs.org/en/latest/) - [Download](http://django-crispy-forms.readthedocs.org/en/latest/install.html) - [Documentatie](http://django-crispy-forms.readthedocs.org/en/latest/)

### Installeren / Activeren (Windows Vagrant/Linux)
1. Zorg dat je in je Linux omgeving werkt, zie het kopje **Vagrant** voor meer informatie.
1. Zorg dat je virtual environment is geactiveerd. Zie het kopje **Virtual Environment** voor meer informatie.
1. Type `pip freeze` en kijk of `django-cripy-forms==x.x.x` is geïnstalleerd.
1. Is het nog niet geïntalleerd? Type dan `pip install django-crispy-forms` om deze te installeren.
1. Navigeer naar je project configuratie map, bijvoorbeeld `cd ~/tutorial_project/tutorial_project`
1. Open het bestand `settings.py` met een editor.
1. Voeg `crispy_forms` aan je `INSTALLED_APPS` toe.
1. Voeg ook `CRISPY_TEMPLATE_PACK = 'uni_form'` toe aan je `settings.py`. (maakt niet uit waar, zolang het maar niet in een LIST is!) (save & exit)


---
# **TUTORIALS!**
---

Je hebt je werkende omgeving opgezet, en kunt online tutorials gaan volgen! Succes!

1. [Try Django 1.9](https://www.youtube.com/watch?v=yfgsklK_yFo) 1 t/m 38
1. [Try Django 1.8](https://www.youtube.com/watch?v=KsLHt3D_jsE&list=PLEsfXFp6DpzRcd-q4vR5qAgOZUuz8041S) Oplijsten!
1. [Django Rest Framework](http://www.django-rest-framework.org/tutorial/1-serialization/) 1, 2, 4, 5 6
1. [AngularJS]() Zoeken!
