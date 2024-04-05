<template>
    <div>


        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <!-- {{-- @yield('breadcrumb') --}} -->
            <!-- /.content-header -->

            <div class="content-header">
            <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                <h1 class="m-0 text-dark">
                    <i class="nav-icon fas fa-th"></i>
                    <!-- {{__('Dashboard')}} -->
                    Dashboard
                </h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">
                        <!-- {{__('Dashboard')}} -->
                        Dashboard
                    </li>
                </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <!-- @include('partials.validation_errors') -->
                    <!-- {{-- @yield('content') --}} -->

                    <!-- {{-- @can('admin') --}} -->

                    <!-- Admin Reports -->
                    <div class="row">
                        <div class="col-lg-2 col-6">
                            <!-- small box -->
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <h3>05</h3>
                                    <!-- <p>{{ __('Tests') }}</p> -->
                                    <p>Tests'</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-flask"></i>
                                </div>
                                <!-- <a href="{{ route('admin.tests.index') }}" -->
                                <a href="" class="small-box-footer">
                                    <!-- {{ __('More info') }}  -->
                                    More info
                                    <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-2 col-6">
                            <!-- small box -->
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <!-- {{-- <h3>{{$cultures_count}}</h3> --}} -->
                                    <h3>10</h3>
                                    <!-- <p>{{ __('Cultures') }}</p> -->
                                    <p>Cultures</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-vial"></i>
                                </div>
                                <!-- {{-- <a href="{{route('admin.cultures.index')}}" class="small-box-footer">{{__('More info')}} <i class="fas fa-arrow-circle-right"></i></a> --}} -->
                                <a href="#" class="small-box-footer">
                                    <!-- {{ __('More info') }} -->
                                    More info
                                    <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-2 col-6">
                            <!-- small box -->
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <!-- {{-- <h3>{{$antibiotics_count}}</h3> --}} -->
                                    <h3>20</h3>
                                    <!-- <p>{{ __('Antibiotics') }}</p> -->
                                    <p>Antibiotics</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-capsules"></i>
                                </div>
                                <!-- {{-- <a href="{{route('admin.antibiotics.index')}}" class="small-box-footer">{{__('More info')}} <i class="fas fa-arrow-circle-right"></i></a> --}} -->
                                <a href="#" class="small-box-footer">
                                    <!-- {{ __('More info') }}  -->
                                    More info
                                    <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-2 col-6">
                            <!-- small box -->
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <!-- {{-- <h3>{{$patients_count}}</h3> --}} -->
                                    <h3>40</h3>
                                    <!-- <p>{{ __('Patients') }}</p> -->
                                    <p>Patients</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-user-injured"></i>
                                </div>
                                <!-- {{-- <a href="{{route('admin.patients.index')}}" class="small-box-footer">{{__('More info')}} <i class="fas fa-arrow-circle-right"></i></a> --}} -->
                                <a href="#" class="small-box-footer">
                                    <!-- {{ __('More info') }}  -->
                                    More info
                                    <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6">
                            <!-- small box -->
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <!-- {{-- <h3>{{$contracts_count}}</h3> --}} -->
                                    <h3>60</h3>
                                    <!-- <p>{{ __('Contracts') }}</p> -->
                                    <p>Contracts</p>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-file-contract nav-icon"></i>
                                </div>
                                <!-- {{-- <a href="{{route('admin.contracts.index')}}" class="small-box-footer">{{__('More info')}} <i class="fas fa-arrow-circle-right"></i></a> --}} -->
                                <a href="#" class="small-box-footer">
                                    <!-- {{ __('More info') }}  -->
                                    More info
                                    <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6">
                            <!-- small box -->
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <!-- {{-- <h3>{{$visits_count}}</h3> --}} -->
                                    <h3>70</h3>
                                    <!-- <p>{{ __('Home visits') }}</p> -->
                                    <p>Home visits</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-home"></i>
                                </div>
                                <!-- {{-- <a href="{{route('admin.visits.index')}}" class="small-box-footer">{{__('More info')}} <i class="fas fa-arrow-circle-right"></i></a> --}} -->
                                <a href="#" class="small-box-footer">
                                    <!-- {{ __('More info') }} -->
                                    More info
                                    <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>

                        <!-- ./col -->
                        <!-- Other small boxes -->
                        <!-- Please add them similarly -->
                                         <!-- today statistics -->
                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-olive color-palette">
                        <span class="info-box-icon">
                        <i class="fas fa-money-bill-wave"></i>
                        </span>

                        <div class="info-box-content">
                        <span class="info-box-text">
                            <!-- {{__('Today income amount')}} -->
                            Today income amount
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$today_paid}} get_currency()</span> --}} -->
                        <span class="info-box-number">80</span>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-olive color-palette">
                        <span class="info-box-icon">
                        <i class="fas fa-money-bill-wave"></i>
                        </span>

                        <div class="info-box-content">
                        <span class="info-box-text">
                            <!-- {{__('Today expense amount')}} -->
                            Today expense amount
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$today_total_expense}} get_currency()</span> --}} -->
                        <span class="info-box-number">90</span>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-olive color-palette">
                        <span class="info-box-icon">
                        <i class="fas fa-money-bill-wave"></i>
                        </span>

                        <div class="info-box-content">
                        <span class="info-box-text">
                            <!-- {{__('Today profit amount')}} -->
                            Today profit amount
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$today_profit}} get_currency()</span> --}} -->
                        <span class="info-box-number">100</span>
                        </div>
                    </div>
                    </div>
                    <!-- /today statistics -->

                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-primary">
                        <span class="info-box-icon"><i class="fa fa-list"></i></span>

                        <div class="info-box-content">
                        <span class="info-box-text">
                            <!-- {{__('Tests')}} -->
                            Tests
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$group_tests_count}}</span> --}} -->
                        <span class="info-box-number">110</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-warning">
                        <span class="info-box-icon"><i class="fa fa-pause-circle"></i></span>

                        <div class="info-box-content">
                        <span class="info-box-text">
                            <!-- {{__('Pending Tests')}} -->
                            Pending Tests
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$pending_tests_count}}</span> --}} -->
                        <span class="info-box-number">110</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-success">
                        <span class="info-box-icon"><i class="fa fa-check-double"></i></span>

                        <div class="info-box-content">
                        <span class="info-box-text">
                            <!-- {{__('Completed Tests')}} -->
                            Completed Tests
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$done_tests_count}}</span> --}} -->
                        <span class="info-box-number">120</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-primary">
                        <span class="info-box-icon"><i class="fa fa-list"></i></span>

                        <div class="info-box-content">
                        <span class="info-box-text">
                            <!-- {{__('Cultures')}} -->
                            Cultures
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$group_cultures_count}}</span> --}} -->
                        <span class="info-box-number">130</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-warning">
                        <span class="info-box-icon"><i class="fa fa-pause-circle"></i></span>

                        <div class="info-box-content">
                        <span class="info-box-text">

                            <!-- {{__('Pending Culltures')}} -->
                           Pending Culltures
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$pending_cultures_count}}</span> --}} -->
                        <span class="info-box-number">140</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                    <div class="info-box bg-success">
                        <span class="info-box-icon"><i class="fa fa-check-double"></i></span>

                        <div class="info-box-content">
                        <span class="info-box-text">
                            <!-- {{__('Completed Cultures')}} -->
                            Completed Cultures
                        </span>
                        <!-- {{-- <span class="info-box-number">{{$done_cultures_count}}</span> --}} -->
                        <span class="info-box-number">150</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    </div>
                    <!-- Online Users -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card card-success">
                                <div class="card-header">
                                    <h3 class="card-title"><i class="fas fa-wifi"></i>
                                        <!-- {{ __('Online users') }} -->
                                        Online users
                                        ( <span class="online_count">0</span> )
                                    </h3>
                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body pt-0 pb-0">
                                    <ul class="products-list product-list-in-card pl-2 pr-2 online_list">
                                    </ul>
                                </div>
                                <!-- /.card-body -->
                            </div>
                        </div>
                    </div>
                    <!-- /.row -->
                    <!-- /Admin Reports -->

                    </div>
                    <!-- /Online Users -->

                    <!-- Today scheduled visits -->
                    <!-- {{-- @can('view_visit') --}} -->
                    <div class="row">
                        <div class="col-lg-12 table-responsive">
                            <div class="card card-danger">
                                <div class="card-header">
                                    <h5 class="card-title">
                                        <i class="fas fa-bell"></i>
                                        <!-- {{ __('Today scheduled home visits') }} -->
                                        Today scheduled home visits
                                        <!-- {{-- ( {{//count($today_visits)}} ) --}} -->
                                    </h5>
                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                                class="fas fa-minus"></i>
                                        </button>
                                        <button type="button" class="btn btn-tool" data-card-widget="remove"><i
                                                class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="card-body table-responsive">
                                    <!-- {{-- @if (count($today_visits)) --}} -->
                                    <table class="table table-bordered table-striped">
                                        <!-- Table header -->
                                        <thead>
                                            <tr>
                                                <!-- <th>{{ __('Patient Name') }}</th>
                                                <th>{{ __('Phone') }}</th>
                                                <th>{{ __('Address') }}</th>
                                                <th>{{ __('Date of birth') }}</th>
                                                <th>{{ __('Visit date') }}</th>
                                                <th>{{ __('Status') }}</th>
                                                <th>{{ __('Viewed') }}</th> -->
                                                <th>Patient Name</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                <th>Date of birth</th>
                                                <th>Visit date</th>
                                                <th>Status</th>
                                                <th>Viewed</th>
                                            </tr>
                                        </thead>
                                        <!-- {{-- <tbody>
                                            @foreach ($today_visits as $visit)
                                            <tr>
                                                <td>
                                                    @if (isset($visit['patient']))
                                                    {{$visit['patient']['name']}}
                                                    @endif
                                                </td>
                                                <td>
                                                    @if (isset($visit['patient']))
                                                    {{$visit['patient']['phone']}}
                                                    @endif
                                                </td>
                                                <td>
                                                    @if (isset($visit['patient']))
                                                    {{$visit['patient']['address']}}
                                                    @endif
                                                </td>
                                                <td>
                                                    @if (isset($visit['patient']))
                                                    {{$visit['patient']['dob']}}
                                                    @endif
                                                </td>
                                                <td>
                                                    @if (isset($visit['patient']))
                                                    {{$visit['visit_date']}}
                                                    @endif
                                                </td>
                                                <td>
                                                    @if ($visit['status'])
                                                    <input type="checkbox" id="change_status_{{$visit['id']}}" visit-id="{{$visit['id']}}" checked netliva-switch data-active-text="{{__('Completed')}}" data-passive-text=" {{__('Pending visit')}}"/>
                                                    @else
                                                    <input type="checkbox" id="change_status_{{$visit['id']}}" visit-id="{{$visit['id']}}" netliva-switch data-active-text="{{__('Completed')}}" data-passive-text=" {{__('Pending visit')}}"/>
                                                    @endif
                                                </td>
                                                <td width="100px">
                                                    @can('view_visit')
                                                    <a href="{{route('admin.visits.show',$visit['id'])}}" class="btn btn-primary btn-sm">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    @endcan
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody> --}} -->

                                    </table>
                                    <!-- {{-- @else -->
                                    <!-- //     <p class="text-danger text-center">{{__('No data available')}}</p> -->
                                    //     <p class="text-danger text-center">No data available</p>
                                    <!-- // @endif --}} -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- // {{-- @endcan --}} -->
                    <!-- //Today scheduled visits -->
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        // Component logic goes here
    }
</script>

<style scoped>
    /* Component-specific styles go here */
</style>
