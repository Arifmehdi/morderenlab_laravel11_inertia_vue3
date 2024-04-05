<script >
import AdminLogo from '../../../../public/backend/img/logo.png';
import User2 from '../../../../public/backend/dist/img/user2-160x160.jpg'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import NavLink from '@/Components/NavLink.vue';
export default {

    data() {
        return {
            Logo :AdminLogo,
            userImage:User2,
        }
    }

}
</script>
<template>
    <div>
            <!-- Sidebar -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <router-link to="/login">Login</router-link>


            <router-link to="/" class="brand-link">
            <img :src="Logo" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <!-- {{--<span class="brand-text font-weight-light">{{$info['name']}}</span>--}} -->
            <span class="brand-text font-weight-light">Home</span>
            </router-link>
            <!-- \Brand Logo -->

            <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img :src="userImage" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">
                        {{ $page.props.auth.user.name }}
                    <!-- {{--@if(Auth::guard('admin')->check())
                        {{Auth::guard('admin')->user()->name}}
                    @else
                        {{Auth::guard('patient')->user()->name}}<br>
                        {{__('Code')}}: {{Auth::guard('patient')->user()->code}}
                    @endif--}} -->
                    </a>
                </div>
                </div>
                <!-- Sidebar Menu -->
                <!-- Admin sidebar -->
                <!-- {{--@can('admin')--}} -->

                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.index')}}" class="nav-link" id="dashboard">--}} -->
                        <a href="#" class="nav-link" @click="$inertia.visit(route('dashboard'))" id="dashboard">

                            <i class="nav-icon fas fa-th"></i>
                            <p>
                                <!-- {{__('Dashboard')}} -->
                                Dashboard
                            </p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.profile.edit')}}" class="nav-link" id="profile">--}} -->
                        <a href="#" class="nav-link" id="profile" @click="$inertia.visit(route('admin.profile.edit'))">
                            <i class="nav-icon fas fa-user-circle"></i>
                            <p>
                                <!-- {{__('Profile')}} -->
                               Profile
                            </p>
                        </a>
                    </li>

                    <!-- {{--@can('view_group')--}} -->
                    <li class="nav-item">

                        <!-- <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink> -->

                        <a href="#" class="nav-link" @click="$inertia.visit(route('admin.invoice'))" id="groups">
                            <i class="nav-icon fas fa-layer-group"></i>
                            <p><!-- {{__('Invoices')}} --> Invoices </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_report')--}} -->
                    <li class="nav-item">
                        <a href="#" class="nav-link" @click="$inertia.visit(route('admin.reports.index'))" id="reports">
                            <i class="nav-icon fas fa-flag"></i>
                        <p>
                            <!-- {{__('Reports')}} -->
                            Reports
                        </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_branch')--}} -->
                        <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.branches.index')}}" class="nav-link" id="branches">--}} -->
                        <a href="#" class="nav-link" id="branches">
                            <i class="fas fa-map-marked-alt nav-icon"></i>
                            <!-- <p>{{__('Branches')}}</p> -->
                            <p>Branches</p>
                        </a>
                        </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_test')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.tests.index')}}" class="nav-link" id="tests">--}} -->
                        <a href="#" class="nav-link" id="tests">
                        <i class="nav-icon fas fa-flask"></i>
                        <p>
                            <!-- {{__('Tests')}} -->
                           Tests
                        </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_culture')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.cultures.index')}}" class="nav-link" id="cultures">--}} -->
                        <a href="#" class="nav-link" id="cultures">
                        <i class="nav-icon fas fa-vial"></i>
                        <p>
                            <!-- {{__('Cultures')}} -->
                            Cultures
                        </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_culture_option')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.culture_options.index')}}" class="nav-link" id="culture_options">--}} -->
                        <a href="#" class="nav-link" id="culture_options">
                        <i class="nav-icon fas fa-vial"></i>
                        <p>
                            <!-- {{__('Culture options')}} -->
                            Culture options
                        </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_antibiotic')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.antibiotics.index')}}" class="nav-link" id="antibiotics">--}} -->
                        <a href="#" class="nav-link" id="antibiotics">
                        <i class="nav-icon fas fa-capsules"></i>
                        <p>
                            <!-- {{__('Antibiotics')}} -->
                            Antibiotics
                        </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_doctor')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.doctors.index')}}" class="nav-link" id="doctors">--}} -->
                        <a href="#" class="nav-link" id="doctors">
                        <i class="nav-icon fa fa-user-md"></i>
                        <p>
                            <!-- {{__('Doctors')}} -->
                            Doctors
                        </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@canany(['view_test_prices','view_culture_prices'])--}} -->
                        <li class="nav-item has-treeview" id="prices">
                        <a href="#" class="nav-link" id="prices_link">
                            <i class="nav-icon fas fa-list"></i>
                            <p>
                            <!-- {{__('Price List')}} -->
                            Price List
                            <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">

                            <!-- {{--@can('view_test_prices')--}} -->
                            <li class="nav-item">
                                <!-- {{--<a href="{{route('admin.prices.tests')}}" class="nav-link" id="tests_prices">--}} -->
                            <a href="#" class="nav-link" id="tests_prices">
                                <i class="far fa-circle nav-icon"></i>
                                <!-- <p>{{__('Tests')}}</p> -->
                                <p>Tests</p>
                            </a>
                            </li>
                            <!-- {{--@endcan--}} -->

                            <!-- {{--@can('view_culture_prices')--}} -->
                            <li class="nav-item">
                                <!-- {{--<a href="{{route('admin.prices.cultures')}}" class="nav-link" id="cultures_prices">--}} -->
                            <a href="#" class="nav-link" id="cultures_prices">
                                <i class="far fa-circle nav-icon"></i>
                                <!-- <p>{{__('Cultures')}}</p> -->
                                <p>Cultures</p>
                            </a>
                            </li>
                            <!-- {{--@endcan--}} -->

                        </ul>
                        </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_contract')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.contracts.index')}}" class="nav-link" id="contracts">--}} -->
                        <a href="#" class="nav-link" id="contracts">
                        <i class="fas fa-file-contract nav-icon"></i>
                        <!-- <p>{{__('Contracts')}}</p> -->
                        <p>Contracts</p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_patient')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.patients.index')}}" class="nav-link" id="patients">--}} -->
                        <a href="#" class="nav-link" id="patients">
                        <i class="nav-icon fas fa-user-injured"></i>
                        <p>
                            <!-- {{__('Patients')}} -->
                            Patients
                        </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_visit')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.visits.index')}}" class="nav-link" id="visits">--}} -->
                        <a href="#" class="nav-link" id="visits">
                        <i class="nav-icon fas fa-home"></i>
                        <p>
                            <!-- {{__('Home Visits')}} -->
                            Home Visits
                        </p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_chat')--}} -->
                        <li class="nav-item">
                            <!-- {{--<a href="{{route('admin.chat.index')}}" class="nav-link" id="chat">--}} -->
                            <a href="#" class="nav-link" id="chat">
                            <i class="nav-icon far fa-comment-dots"></i>
                            <p>
                                <!-- {{__('Chat')}} -->
                                Chat
                            </p>
                            </a>
                        </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@canany(['view_accounting_reports','view_expense','view_expense_category'])--}} -->
                    <li class="nav-item has-treeview" id="accounting">
                        <a href="#" class="nav-link" id="accounting_link">
                        <i class="nav-icon fas fa-calculator"></i>
                        <p>
                            <!-- {{__('Accounting')}} -->
                            Accounting
                            <i class="right fas fa-angle-left"></i>
                        </p>
                        </a>
                        <ul class="nav nav-treeview">

                        <!-- {{--@can('view_expense_category')--}} -->
                        <li class="nav-item">
                            <!-- {{--<a href="{{route('admin.expense_categories.index')}}" class="nav-link" id="expense_categories">--}} -->
                            <a href="#" class="nav-link" id="expense_categories">
                            <i class="far fa-circle nav-icon"></i>
                            <p>
                                <!-- {{__('Expense Categories')}} -->
                                Expense Categories
                            </p>
                            </a>
                        </li>
                        <!-- {{--@endcan--}} -->

                        <!-- {{--@can('view_expense')--}} -->
                        <li class="nav-item">
                            <!-- {{--<a href="{{route('admin.expenses.index')}}" class="nav-link" id="expenses">--}} -->
                            <a href="#" class="nav-link" id="expenses">
                            <i class="far fa-circle nav-icon"></i>
                            <p>
                                <!-- {{__('Expenses')}} -->
                                Expenses
                            </p>
                            </a>
                        </li>
                        <!-- {{--@endcan--}} -->

                        <!-- {{--@can('view_accounting_reports')--}} -->
                        <li class="nav-item">
                            <a href="#" class="nav-link" id="accounting_reports">
                            <i class="far fa-circle nav-icon"></i>
                            <p>
                                <!-- {{__('Accounting Report')}} -->
                                Accounting Report'
                            </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" id="accounting_doctor_reports">
                            <i class="far fa-circle nav-icon"></i>
                            <p>
                                <!-- {{__('Doctor report')}} -->
                                Doctor report
                            </p>
                            </a>
                        </li>
                        <!-- {{--@endcan--}} -->

                        </ul>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@canany(['view_user','view_role'])--}} -->
                        <li class="nav-item has-treeview" id="users_roles">
                        <a href="#" class="nav-link" id="users_roles_link">
                            <i class="nav-icon fas fa-user"></i>
                            <p>
                            <!-- {{__('Roles And Users')}} -->
                            Roles And Users
                            <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">

                            <!-- {{--@can('view_role')--}} -->
                            <li class="nav-item">
                            <!-- {{--<a href="{{route('admin.roles.index')}}" class="nav-link" id="roles">--}} -->
                            <a href="#" class="nav-link" id="roles">
                                <i class="far fa-circle nav-icon"></i>
                                <!-- <p>{{__('Roles')}}</p> -->
                                <p>Roles</p>
                            </a>
                            </li>
                            <!-- {{--@endcan--}} -->

                        <!-- {{-- @can('view_user')--}} -->
                            <li class="nav-item">
                            <!-- {{--<a href="{{route('admin.users.index')}}" class="nav-link" id="users">--}} -->
                            <a href="#" class="nav-link" id="users">
                                <i class="far fa-circle nav-icon"></i>
                                <!-- <p>{{__('Users')}}</p> -->
                                <p>Users</p>
                            </a>
                            </li>
                            <!-- {{--@endcan--}} -->

                        </ul>
                        </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_setting')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.settings.index')}}" class="nav-link" id="settings">--}} -->
                        <a href="#" class="nav-link" id="settings">
                        <i class="fa fa-cogs nav-icon"></i>
                        <!-- <p>{{__('Settings')}}</p> -->
                        <p>Settings</p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_translation')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.translations.index')}}" class="nav-link" id="translations">--}} -->
                        <a href="#" class="nav-link" id="translations">
                        <i class="fa fa-book nav-icon"></i>
                        <!-- <p>{{__('Translations')}}</p> -->
                        <p>Translations</p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_activity_log')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.activity_logs.index')}}" class="nav-link" id="activity_logs">--}} -->
                        <a href="#" class="nav-link" id="activity_logs">
                        <i class="fa fa-server nav-icon"></i>
                        <!-- <p>{{__('Activity Logs')}}</p> -->
                        <p>Activity Logs</p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->

                    <!-- {{--@can('view_backup')--}} -->
                    <li class="nav-item">
                        <!-- {{--<a href="{{route('admin.backups.index')}}" class="nav-link" id="backups">--}} -->
                        <a href="#" class="nav-link" id="backups">
                        <i class="fa fa-database nav-icon"></i>
                        <!-- <p>{{__('Database Backups')}}</p> -->
                        <p>Database Backup</p>
                        </a>
                    </li>
                    <!-- {{--@endcan--}} -->


                    </ul>
                </nav>

                <!-- {{-- @include('partials.admin_sidebar') --}} -->
                <!-- \Admin sidebar -->
                <!-- Patient sidebar -->
            <!-- {{--@elsecan('patient')
                @include('partials.patient_sidebar')
                @endcan--}} -->
                <!-- \Patient sidebar -->
            <!-- /.sidebar-menu -->
            </div>
        </aside>
        <!-- /.sidebar -->
    </div>
</template>
