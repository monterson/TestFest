import { LoginPage } from './loginPage';
import { HomePage } from './homePage';
import { RegisterTrollPage } from './registerTrollPage';
import { SearchTrollPage } from './searchTrollPage';
import { AngularPractisPage } from './angularPractisPage';
import { DebugPage } from './debugPage';
import { NonAngularPage } from './nonAngularPage';

export class Pages {
    private _loginPage = new LoginPage();
    private _homePage = new HomePage();
    private _registerTrollPage = new RegisterTrollPage();
    private _searchTrollPage = new SearchTrollPage();
    private _angularPractisPage = new AngularPractisPage();
    private _debugPage = new DebugPage();
    private _nonAngularPage = new NonAngularPage();

    get loginPage(): LoginPage {
        return this._loginPage;
    }

    get homePage(): HomePage {
        return this._homePage;
    }

    get registerTrollPage(): RegisterTrollPage {
        return this._registerTrollPage;
    }

    get searchTrollPage(): SearchTrollPage {
        return this._searchTrollPage;
    }

    get angularPractisPage(): AngularPractisPage {
        return this._angularPractisPage;
    }

    get debugPage(): DebugPage {
        return this._debugPage;
    }

    get nonAngularPage(): NonAngularPage {
        return this._nonAngularPage;
    }
}


