import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";


@Component({
    selector: 'layout',
    styleUrls: ['./layout.component.sass'],
    templateUrl: './layout.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input()
    header!: TemplateRef<any>;

    @Input()
    footer!: TemplateRef<any>;

    @ViewChild('refHeader', { read: HeaderComponent })
    refHeader!: ElementRef;
    
    @ViewChild('refBody', { read: ElementRef })
    refBody!: ElementRef;

    @ViewChild('refFooter', { read: FooterComponent })
    refFooter!: ElementRef;


    @Input()
    isSidebarOpen: boolean = false;

    isPageCheckout!: boolean;

    handleSidebarState() {
        this.isSidebarOpen = this.isSidebarOpen ? false : true;
    }

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void { 
        this.route.queryParams.subscribe((params) => {
            this.isPageCheckout = params['name'] == 'checkout' ? true : false;
       })
    }

    ngOnDestroy(): void {

    }

    ngAfterViewInit(): void {

    }
}