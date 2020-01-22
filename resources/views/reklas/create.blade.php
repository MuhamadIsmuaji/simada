@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h3 class="pull-left">{{ Breadcrumbs::render() }}</h3>
    </section>
    <div class="content">
        <div class="clearfix"></div>
        @include('adminlte-templates::common.errors')
        <div class="box box-primary">
            <div class="box-body">
                <div class="">
                    {!! Form::open(['route' => 'reklas.store', 'id' => 'form-reklas']) !!}

                        @include('reklas.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection
